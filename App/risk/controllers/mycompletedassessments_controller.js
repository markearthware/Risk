steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../models/hazards.js',
    '../models/assessments.js',
    '../models/assessmentsB.js',
    '../models/assessmentexistingcontrols.js',
    '../models/assessmentcontrols.js',
    '../lib/WebSQL/db.js',
    '../views/mycompletedassessments/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.MyCompletedAssessments', {
        },
    {
        init: function () {
            this.loadData();
        },
        assessments: null,
        task: null,
        taskId: null,
        loadData: function () {
            var assessmentsDef = Risk.Models.Assessments.findAll(localStorage.taskId);
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            var view;
            var self = this;
            $.when(assessmentsDef, taskDef).done(function (assessmentsRes, taskRes) {
                self.task = taskRes;
                self.assessments = assessmentsRes;
                var amberList = self.getAmberList(assessmentsRes);
                var greenList = self.getGreenList(assessmentsRes);
                view = $.View('//risk/views/mycompletedassessments/init.ejs', { ambers: amberList, greens: greenList });
                $('#MyCompletedAssessmentsContent').html(view);
                $('#MyCompletedAssessmentsList').listview();
                var divider = $('#divider');
                divider.text("Risks assessments for task: " + taskRes.Name);
                $('.task').text("'" + taskRes.Name + "'");

                $('#MyCompletedAssessmentsPage').trigger("create");
            });
        },
        '.assessment-item click': function (el) {
            var id = $(el).attr("id");
            var assessmentDef = Risk.Models.Assessments.findOne(id);
            $.when(assessmentDef).done(function (assessmentRes) {
                localStorage.hazardId = assessmentRes.HazardId;
                localStorage.editAssessmentId = id;
                localStorage.assessmentId = id;
                $.mobile.changePage("completeddetails.htm");
            });
        },
        '.delete click': function (el) {
            var id = $(el).attr("id");
            localStorage.deleteAssessmentId = id;
        },
        '.addToExisting click': function () {
            localStorage.addToExisting = "true";
            localStorage.editAssessmentId = "";
        },

        recursionSave: function (i, ass, task, newid) {
            if (newid != undefined) {
                this.taskId = newid;
            }
            var self = this;
            var existingControlsDef = Risk.Models.AssessmentExistingControls.findAllById(ass[i].id);
            var furtherControlsDef = Risk.Models.AssessmentControls.findAllById(ass[i].id);
            var newAss = {
                TaskId: this.taskId,
                HazardId: ass[i].HazardId,
                Likelihood: ass[i].Likelihood,
                Severity: ass[i].Severity,
                LikelihoodB: ass[i].LikelihoodB,
                SeverityB: ass[i].SeverityB,
                HowId: ass[i].HowId,
                WhoId: ass[i].WhoId,
                FurtherDetails: ass[i].FurtherDetails
            };
            new Risk.Models.AssessmentsB(newAss).save(function (ob, nid) {
                $.when(existingControlsDef, furtherControlsDef).done(function (existingControlsRes, furtherControlsRes) {
                    $(existingControlsRes).each(function (i, item) {
                        var assessmentexistingcontrols = { AssessmentId: nid, ExistingControlId: this.ExistingControlId };
                        new Risk.Models.AssessmentExistingControls(assessmentexistingcontrols).save();
                    });
                    $(furtherControlsRes).each(function (j, item) {
                        var assessmentfurthercontrols = { AssessmentId: nid, ControlId: this.ControlId };
                        new Risk.Models.AssessmentControls(assessmentfurthercontrols).save();
                    });
                    if (i < ass.length - 1) {
                        i = i + 1;
                        self.recursionSave(i, ass, task);
                    }
                });
            });
        },

        '#CopyTask click': function () {
            var self = this;
            var ass = this.assessments;
            var task = { Name: this.task.Name, Site: this.task.Site, DateStarted: new Date().getTime(), DateFinished: "", Sent: 0 };

            new Risk.Models.Task(task).save(function (obj, newid) {
                if (ass.length > 0) {
                    self.recursionSave(0, ass, task, newid);
                }
            });
        },

        getAmberList: function (assessments) {
            var list = [];
            for (var i = 0; i < assessments.length; i++) {
                if (assessments[i].LikelihoodB * assessments[i].SeverityB > 4) {
                    list.push(assessments[i]);
                }
            }
            return list;
        },
        getGreenList: function (assessments) {
            var list = [];
            for (var i = 0; i < assessments.length; i++) {
                if (assessments[i].LikelihoodB * assessments[i].SeverityB < 5) {
                    list.push(assessments[i]);
                }
            }
            return list;
        }
    });
    });