steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/whos.js',
    '../models/hows.js',
    '../models/assessmentsB.js',
    '../models/assessmenthows.js',
    '../models/assessmentwhos.js',
    '../models/assessmentexistingcontrols.js',
    '../models/controls.js',
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
                    var controlsDef = Risk.Models.Controls.findAll(localStorage.hazardId);
                    var view;
                    $.when(hazardsDef, whosDef, howsDef, controlsDef).done(function (hazardsRes, whosRes, howsRes, controlsRes) {

                        $('#header').text(hazardsRes.Name);

                        var viewModel = { whos: whosRes, hows: howsRes, existingControls: controlsRes };

                        view = $.View('//risk/views/whos/init.ejs', viewModel);

                        //Stuff in the view
                        $('#WhosContent').html(view);

                        //Init the controls now they have data in them
                        $('#WhosList').selectmenu();
                        $('#HowsList').selectmenu();
                        $('#ExistingControlsList').selectmenu();
                        $('#SeverityList').selectmenu();
                        $('#LikelihoodList').selectmenu();
                        $('#FurtherDetails').textinput();

                        if (localStorage.editAssessmentId) {
                            //get assessment severity likelihood whos and hows back from db
                            var asControlsDef = Risk.Models.AssessmentExistingControls.findAllById(localStorage.editAssessmentId);
                            var asDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);
                            $.when(asDef, asControlsDef).done(function (asRes, asControlsRes) {
                                var controlsValArray = [];
                                $(asControlsRes).each(function (i) {
                                    controlsValArray.push(this.ExistingControlId.toString());
                                });
                                $('#ExistingControlsList').val(controlsValArray);
                                $('#WhosList').val(asRes.WhoId);
                                $('#HowsList').val(asRes.HowId);
                                $('#FurtherDetails').val(asRes.FurtherDetails);
                                $('#SeverityList').val(asRes.Severity);
                                $('#LikelihoodList').val(asRes.Likelihood);

                                $('#WhosList').selectmenu('refresh');
                                $('#HowsList').selectmenu('refresh');
                                $('#ExistingControlsList').selectmenu('refresh');
                                $('#SeverityList').selectmenu('refresh');
                                $('#LikelihoodList').selectmenu('refresh');
                                $('#FurtherDetails').textinput('refresh');
                            });
                        }

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
                    if ($('#WhosList').val() != null &&
                        $('#HowsList').val() != null &&
                        $('#SeverityList').val() != 'Choose Rating' &&
                        $('#LikelihoodList').val() != 'Choose Rating') {
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
                        $('#trafficLight div').removeClass("on");
                        if (score < 13) {
                            if (score < 6) {
                                $('#trafficLight #green').addClass("on");
                            }
                            else {
                                $('#trafficLight #amber').addClass("on");
                            }
                            this.nextStepHref = "myassessments.htm";
                            $('#WhosPage #submit').text(localStorage.editAssessmentId ? "Save assessment" : "Finish assessment");
                            $('#WhosPage #submit').fadeIn().button('refresh');
                        }
                        else {
                            this.nextStepHref = "controls.htm";
                            $('#WhosPage #submit').text("Add further controls");
                            $('#WhosPage #submit').fadeIn().button('refresh');
                            $('#trafficLight #red').addClass("on");
                        }
                    }
                },
                '#submit click': function () {
                    $.mobile.showPageLoadingMsg();
                    localStorage.severityRating = $('#SeverityList').val();
                    localStorage.likelihoodRating = $('#LikelihoodList').val();

                    var assessment;
                    if (localStorage.editAssessmentId) {
                        assessment = {
                            id: localStorage.editAssessmentId,
                            TaskId: localStorage.taskId,
                            HazardId: localStorage.hazardId,
                            Likelihood: localStorage.likelihoodRating,
                            Severity: localStorage.severityRating,
                            HowId: $('#HowsList').val(),
                            WhoId: $('#WhosList').val(),
                            FurtherDetails: $('#FurtherDetails').val()
                        };
                        Risk.Models.AssessmentExistingControls.deleteMany(localStorage.assessmentId);
                    }
                    else {
                        assessment = {
                            TaskId: localStorage.taskId,
                            HazardId: localStorage.hazardId,
                            Likelihood: localStorage.likelihoodRating,
                            Severity: localStorage.severityRating,
                            HowId: $('#HowsList').val(),
                            WhoId: $('#WhosList').val(),
                            FurtherDetails: $('#FurtherDetails').val()
                        };
                    }
                    new Risk.Models.AssessmentsB(assessment).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
                },

                saveExistingControls: function () {
                    var controls = $.makeArray($('#ExistingControlsList').val());
                    $(controls).each(function (i) {
                        var assessmentcontrols = { AssessmentId: localStorage.assessmentId, ExistingControlId: this.toString() };
                        new Risk.Models.AssessmentExistingControls(assessmentcontrols).save();
                    });
                },

                onInsertSuccess: function (obj, newid) {
                    if (localStorage.editAssessmentId) {
                        localStorage.assessmentId = obj.id;
                    }
                    else {
                        localStorage.assessmentId = newid;
                    }
                    this.saveExistingControls();
                    $.mobile.changePage(this.nextStepHref);
                },
                onInsertFail: function () {
                    //todo popup
                },
                '#backToHazards click': function () {
                    if (localStorage.editAssessmentId) {
                        localStorage.editAssessmentId = "";
                        $.mobile.changePage("myassessments.htm", { reverse: true });
                    }
                    else {
                        $.mobile.changePage("hazards.htm", { reverse: true });
                    }
                }
            });
    });