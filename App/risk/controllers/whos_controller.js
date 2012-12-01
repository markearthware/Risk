steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/whos.js',
    '../models/hows.js',
    '../models/assessmentsB.js',
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
                controls: null,
                loadData: function () {
                    var self = this;
                    var hazardsDef = Risk.Models.Hazards.findOne(localStorage.hazardId);
                    var whosDef = Risk.Models.Whos.findAll();
                    var howsDef = Risk.Models.Hows.findAll(localStorage.hazardId);
                    var controlsDef = Risk.Models.Controls.findAll(localStorage.hazardId);
                    var view;
                    $.when(hazardsDef, whosDef, howsDef, controlsDef).done(function (hazardsRes, whosRes, howsRes, controlsRes) {

                        $('#header').text(hazardsRes.Name);

                        var viewModel = { whos: whosRes, hows: howsRes, existingControls: controlsRes };

                        view = $.View('//risk/views/whos/init.ejs', viewModel);

                        //Stuff in the view markup
                        $('#WhosContent').html(view);

                        //Init the controls now they have data in them
                        $('#WhosList').selectmenu();
                        $('#HowsList').selectmenu();
                        $('#ExistingControlsList').selectmenu();
                        $('#SeverityList').selectmenu();
                        $('#LikelihoodList').selectmenu();
                        $('#FurtherDetails').textinput();
                        $('#submit').button();
                        $('#furtherControls').button();
                        $('#NewHow').button();
                        $('#NewControl').button();
                        $('.hidden').hide();

                        if (localStorage.editAssessmentId) {
                            //get assessment severity likelihood whos and hows back from db
                            var asControlsDef = Risk.Models.AssessmentExistingControls.findAllById(localStorage.editAssessmentId);
                            var asDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);

                            $.when(asDef, asControlsDef).done(function (asRes, asControlsRes) {
                                var controlsValArray = [];
                                $(asControlsRes).each(function (i) {
                                    controlsValArray.push(this.ExistingControlId.toString());
                                });

                                $('#WhosList').val(asRes.WhoId);
                                $('#HowsList').val(asRes.HowId);
                                $('#FurtherDetails').val(asRes.FurtherDetails);
                                $('#SeverityList').val(asRes.Severity);
                                $('#LikelihoodList').val(asRes.Likelihood);
                                $('#ExistingControlsList').val(controlsValArray);

                                self.refreshControls();
                            });
                        }

                        if (localStorage.tempHowId || localStorage.tempExistingControls) {
                            // reload form state
                            $('#HowsList').val(localStorage.tempHowId);
                            $('#WhosList').val(localStorage.tempWhoId);
                            $('#FurtherDetails').val(localStorage.tempFurtherDetails);
                            $('#SeverityList').val(localStorage.tempSeverity);
                            $('#LikelihoodList').val(localStorage.tempLikelihood);
                            $('#ExistingControlsList').val(localStorage.tempExistingControls.split(","));
                            self.refreshControls();
                            self.resetTempLocalStorage();
                        }
                        self.validation();
                    });
                },

                resetTempLocalStorage: function () {
                    localStorage.tempWhoId = "";
                    localStorage.tempHowId = "";
                    localStorage.tempFurtherDetails = "";
                    localStorage.tempSeverity = "";
                    localStorage.tempLikelihood = "";
                    localStorage.tempExistingControls = "";
                },

                refreshControls: function () {
                    $('#WhosList').selectmenu('refresh');
                    $('#HowsList').selectmenu('refresh');
                    $('#ExistingControlsList').selectmenu('refresh');
                    $('#SeverityList').selectmenu('refresh');
                    $('#LikelihoodList').selectmenu('refresh');
                    $('#FurtherDetails').textinput();
                },

                '#WhosList change': function () {
                    this.validation();
                },

                '#HowsList change': function () {
                    this.validation();
                },
                '#NewHow click': function () {
                    this.saveFormState();
                },                
                '#NewControl click': function () {
                    this.saveFormState();
                },
                '#SeverityList change': function () {
                    this.validation();
                },
                '#LikelihoodList change': function () {
                    this.validation();
                },
                '#ExistingControlsList change': function () {
                    this.validation();
                },
                saveFormState: function () {
                    localStorage.tempWhoId = $('#WhosList').val();
                    localStorage.tempHowId = $('#HowsList').val();
                    localStorage.tempFurtherDetails = $('#FurtherDetails').val();
                    localStorage.tempSeverity = $('#SeverityList').val();
                    localStorage.tempLikelihood = $('#LikelihoodList').val();
                    localStorage.tempExistingControls = $('#ExistingControlsList').val();
                },
                passesValidation: function () {
                    if ($('#WhosList').val() != "Choose option" &&
                        $('#HowsList').val() != "Choose option" &&
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
                        if (score < 12) {
                            if (score < 5) {
                                $('#trafficLight #green').addClass("on");
                            }
                            else {
                                $('#trafficLight #amber').addClass("on");
                            }
                            $('#WhosPage #furtherControls').hide();
                            $('#WhosPage #submit').fadeIn();
                        }
                        else {
                            $('#WhosPage #submit').hide();
                            $('#WhosPage #furtherControls').fadeIn();
                            $('#trafficLight #red').addClass("on");
                        }
                    }
                },
                '#submit,#furtherControls click': function (el, ev) {
                    this.nextStepHref = el.attr("data-href");
                    this.controls = $.makeArray($('#ExistingControlsList').val());
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
                            LikelihoodB: localStorage.likelihoodRating,
                            SeverityB: localStorage.severityRating,
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
                            LikelihoodB: localStorage.likelihoodRating,
                            SeverityB: localStorage.severityRating,
                            HowId: $('#HowsList').val(),
                            WhoId: $('#WhosList').val(),
                            FurtherDetails: $('#FurtherDetails').val()
                        };
                    }
                    new Risk.Models.AssessmentsB(assessment).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
                },

                saveExistingControls: function () {
                    $(this.controls).each(function (i) {
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