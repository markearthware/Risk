steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/controls.js',
    '../models/hazards.js',
    '../models/assessmentcontrols.js',
    '../models/assessments.js',
    '../models/assessmentsB.js',
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
                    var self = this;
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
                        $('#trafficLight #red').addClass("on");

                        if (localStorage.editAssessmentId) {
                            //get assessment severity likelihood and controls back from db
                            var asControlsDef = Risk.Models.AssessmentControls.findAllById(localStorage.editAssessmentId);
                            var asDef = Risk.Models.Assessments.findOne(localStorage.editAssessmentId);

                            $.when(asDef, asControlsDef).done(function (asRes, asControlsRes) {
                                var controlsValArray = [];
                                $(asControlsRes).each(function (i) {
                                    controlsValArray.push(this.ControlId.toString());
                                });
                                $('#ControlsList').val(controlsValArray);
                                $('#SeverityList').val(asRes.Severity);
                                $('#LikelihoodList').val(asRes.Likelihood);
                                $('#ControlsList').selectmenu('refresh');
                                $('#SeverityList').selectmenu('refresh');
                                $('#LikelihoodList').selectmenu('refresh');
                            });
                        }
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
                        $('#trafficLight div').removeClass("on");
                        if (score < 13) {
                            if (score < 6) {
                                $('#trafficLight #green').addClass("on");
                            }
                            else {
                                $('#trafficLight #amber').addClass("on");
                            }
                            this.nextStepHref = "myassessments.htm";
                            $('#button-container').show();
                            $('#submit').button();
                        }
                        else {
                            $('#button-container').hide();
                            $('#trafficLight #red').addClass("on");
                        }
                    }
                },
                '#submit click': function () {
                    $.mobile.showPageLoadingMsg();
                    var self = this;

                    var assessmentDef = Risk.Models.Assessments.findOne(localStorage.assessmentId);
                    $.when(assessmentDef).done(function (assessmentRes) {
                        new Risk.Models.AssessmentsB({ id: assessmentRes.id, TaskId: assessmentRes.TaskId, WhoId: assessmentRes.WhoId, HowId: assessmentRes.HowId, FurtherDetails: assessmentRes.FurtherDetails, HazardId: assessmentRes.HazardId, Likelihood: $('#LikelihoodList').val(), Severity: $('#SeverityList').val() }).save();
                    });

                    var asControlsDef = Risk.Models.AssessmentControls.deleteMany(localStorage.assessmentId);
                    $.when(asControlsDef).done(function () {
                        var controls = $.makeArray($('#ControlsList').val());
                        $(controls).each(function (i) {
                            var assessmentcontrols = { AssessmentId: localStorage.assessmentId, ControlId: this.toString() };
                            new Risk.Models.AssessmentControls(assessmentcontrols).save(function () {
                                if (i == $('#ControlsList').val().length - 1) {
                                    $.mobile.changePage(self.nextStepHref);
                                }
                            });
                        });
                    });
                },

                '#backToWhos click': function () {
                    var assessmentDef = Risk.Models.Assessments.deleteOne(localStorage.assessmentId);
                }

            });
    });