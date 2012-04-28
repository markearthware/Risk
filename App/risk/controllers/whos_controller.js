steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/whos.js',
    '../models/hows.js',
    '../models/assessments.js',
    '../models/assessmenthows.js',
    '../models/assessmentwhos.js',
    '../lib/WebSQL/db.js',
    '../views/whos/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Whos', {
        },
            {
                init: function () {
                    this.loadData();
                },
                severity: 0,
                likelihood: 0,
                risk: 0,
                nextStepHref: "",
                loadData: function () {
                    var hazardsDef = Risk.Models.Hazards.findOne(localStorage.hazardId);
                    var whosDef = Risk.Models.Whos.findAll();
                    var howsDef = Risk.Models.Hows.findAll(localStorage.hazardId);
                    var view;
                    $.when(hazardsDef, whosDef, howsDef).done(function (hazardsRes, whosRes, howsRes) {
                        $('#header').text(hazardsRes.Name);
                        var viewModel = { whos: whosRes, hows: howsRes };
                        view = $.View('//risk/views/whos/init.ejs', viewModel);
                        $('#WhosContent').html(view);
                        $('#WhosList').selectmenu();
                        $('#HowsList').selectmenu();
                        $('#SeverityList').selectmenu();
                        $('#LikelihoodList').selectmenu();
                    });
                },
                '#WhosList change': function () {
                    this.validation();
                },

                '#HowsList change': function () {
                    this.validation();
                },

                '#SeverityList change': function () {
                    this.validation();
                },

                '#LikelihoodList change': function () {
                    this.validation();
                },
                passesValidation: function () {
                    if ($('#WhosList').val() != null && $('#HowsList').val() != null && $('#SeverityList').val() != 'Choose Rating' && $('#LikelihoodList').val() != 'Choose Rating') {
                        alert("true");
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
                        $('#WhosPage #submit').button();
                        var score = this.calculateScore();
                        if (score < 13) {
                            this.nextStepHref = "myassessments.htm";
                            $('#WhosPage #submit').text("Save assessment");
                            $('#WhosPage #submit').fadeIn().button('refresh');
                        }
                        else {
                            this.nextStepHref = "controls.htm";
                            $('#WhosPage #submit').text("Add further controls");
                            $('#WhosPage #submit').fadeIn().button('refresh');
                        }
                    }
                },
                '#submit click': function () {

                    var assessment = { TaskId: localStorage.taskId, HazardId: localStorage.hazardId };

                    new Risk.Models.Assessments(assessment).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));

                },
                onInsertSuccess: function (obj, newid) {

                    localStorage.assessmentId = newid;

                    var self = this;

                    var whos = $.makeArray($('#WhosList').val());

                    $(whos).each(function(i) {
                        var assessmentwhos = { AssessmentId: newid, WhoId: this.toString() };
                        new Risk.Models.AssessmentWhos(assessmentwhos).save(function() {

                            if (i == $('#WhosList').val().length - 1) {
                                var hows = $.makeArray($('#HowsList').val());

                                $(hows).each(function(index) {
                                    var assessmenthows = { AssessmentId: newid, HowId: this.toString() };
                                    new Risk.Models.AssessmentHows(assessmenthows).save(function() {

                                        if (index == $('#HowsList').val().length - 1) {
                                            $.mobile.changePage(self.nextStepHref);
                                        }

                                    }, function() { });
                                });
                            }
                        });

                    });

                },
                onInsertFail: function () {
                    //todo popup
                }
            });
    });