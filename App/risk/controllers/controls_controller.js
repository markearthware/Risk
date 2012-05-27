steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/controls.js',
    '../models/hazards.js',
    '../models/assessmentcontrols.js',
    '../models/assessments.js',
    '../lib/WebSQL/db.js',
    '../views/controls/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Controls', {
    },
            {
                init: function () {
                    this.loadData();
                },
                nextStepHref: "",
                severity: 0,
                likelihood: 0,
                risk: 0,
                loadData: function () {
                    var controlsDef = Risk.Models.Controls.findAll(localStorage.hazardId);
                    var hazardDef = Risk.Models.Hazards.findOne(localStorage.hazardId);
                    var view;
                    $.when(controlsDef, hazardDef).done(function (controlsRes, hazardRes) {
                        $('#header').text("Controls for: " + hazardRes.Name);
                        var viewModel = { controls: controlsRes };
                        steal.dev.log(viewModel);
                        view = $.View('//risk/views/controls/init.ejs', viewModel);
                        $('#ControlsContent').html(view);
                        $('#SeverityList').val(localStorage.severityRating);
                        $('#LikelihoodList').val(localStorage.likelihoodRating);
                        $('#SeverityList').selectmenu();
                        $('#LikelihoodList').selectmenu();
                        $('#ControlsList').selectmenu();
                        $('#button-container').hide();
                    });
                },
                '#ControlsList change': function () {
                    this.validation();
                },
                '#SeverityList change': function () {
                    this.validation();
                },

                '#LikelihoodList change': function () {
                    this.validation();
                },
                passesValidation: function () {
                    if ($('#ControlsList').val() != null) {
                        return true;
                    }
                    return false;
                },

                calculateScore: function () {
                    this.severity = $('#SeverityList').val();
                    this.likelihood = $('#LikelihoodList').val();
                    this.risk = this.severity * this.likelihood;
                    return this.risk;
                },

                validation: function () {
                    if (this.passesValidation()) {
                        var score = this.calculateScore();
                        if (score < 13) {
                            this.nextStepHref = "myassessments.htm";
                            $('#button-container').show();
                            $('#submit').button();
                        }
                        else {
                            $('#button-container').hide();
                        }
                    }
                },
                '#submit click': function () {
                    $.mobile.showPageLoadingMsg();

                    //add assessment controls here
                    var self = this;

                    var controls = $.makeArray($('#ControlsList').val());

                    $(controls).each(function (i) {
                        var assessmentcontrols = { AssessmentId: localStorage.assessmentId, ControlId: this.toString() };
                        new Risk.Models.AssessmentControls(assessmentcontrols).save(function () {
                            if (i == $('#ControlsList').val().length - 1) {
                                $.mobile.changePage(self.nextStepHref);
                            }
                        });
                    });
                },
                
                '#backToWhos click': function () {
                    var assessmentDef = Risk.Models.Assessments.deleteOne(localStorage.assessmentId);
                }
                
            });
});