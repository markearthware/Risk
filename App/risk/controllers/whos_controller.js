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

                        if (localStorage.editAssessmentId) {

                            //get assessment severity likelihood whos and hows back from db
                            var asWhosDef = new Risk.Models.AssessmentWhos.findAllById(localStorage.editAssessmentId);
                            var asHowsDef = new Risk.Models.AssessmentHows.findAllById(localStorage.editAssessmentId);
                            var asDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);

                            $.when(asDef, asWhosDef, asHowsDef).done(function (asRes, asWhosRes, asHowsRes) {

                                var whosValArray = [];
                                $(asWhosRes).each(function (i) {
                                    whosValArray.push(this.WhoId.toString());
                                });

                                var howsValArray = [];
                                $(asHowsRes).each(function (i) {
                                    howsValArray.push(this.HowId.toString());
                                });

                                $('#WhosList').val(whosValArray);
                                $('#HowsList').val(howsValArray);
                                $('#SeverityList').val(asRes.Severity);
                                $('#LikelihoodList').val(asRes.Likelihood);

                                $('#WhosList').selectmenu('refresh');
                                $('#HowsList').selectmenu('refresh');
                                $('#SeverityList').selectmenu('refresh');
                                $('#LikelihoodList').selectmenu('refresh');
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
                    if ($('#WhosList').val() != null && $('#HowsList').val() != null && $('#SeverityList').val() != 'Choose Rating' && $('#LikelihoodList').val() != 'Choose Rating') {
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
                        assessment = { id: localStorage.editAssessmentId, TaskId: localStorage.taskId, HazardId: localStorage.hazardId, Likelihood: localStorage.likelihoodRating, Severity: localStorage.severityRating, HowId: $('#HowsList').val(), WhoId: $('#WhosList').val()};
                    }
                    else {
                        assessment = { TaskId: localStorage.taskId, HazardId: localStorage.hazardId, Likelihood: localStorage.likelihoodRating, Severity: localStorage.severityRating, HowId: $('#HowsList').val(), WhoId: $('#WhosList').val()};
                    }
                    new Risk.Models.AssessmentsB(assessment).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
                },
                onInsertSuccess: function (obj, newid) {
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