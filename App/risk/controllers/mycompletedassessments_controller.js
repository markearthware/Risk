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
                view = $.View('//risk/views/mycompletedassessments/init.ejs', {ambers: amberList, greens: greenList});
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

        '#CopyTask click': function () {
            var ass = this.assessments;
            var task = { Name: this.task.Name, Site: this.task.Site, DateStarted: new Date().getTime(), DateFinished: "", Sent: 0 };

            new Risk.Models.Task(task).save(function (obj, newid) {
                for (var i = 0; i < ass.length; i++) {
                    var existingControlsDef = Risk.Models.AssessmentExistingControls.findAllById(ass[i].id);
                    var furtherControlsDef = Risk.Models.AssessmentControls.findAllById(ass[i].id);
                    var newAss = {
                        TaskId: newid,
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
                            $(existingControlsRes).each(function (i) {
                                var assessmentexistingcontrols = { AssessmentId: nid, ExistingControlId: this.ExistingControlId };
                                new Risk.Models.AssessmentExistingControls(assessmentexistingcontrols).save();
                            });
                            $(furtherControlsRes).each(function (j) {
                                var assessmentfurthercontrols = { AssessmentId: nid, ControlId: this.ControlId };
                                new Risk.Models.AssessmentControls(assessmentfurthercontrols).save();
                            });
                        });
                    });
                }
            });
        },

		getAmberList: function(assessments) {
			var list = [];
			for(var i = 0; i < assessments.length; i++)
			{
				if(assessments[i].LikelihoodB * assessments[i].SeverityB > 4)
				{
					list.push(assessments[i]);
				}
			}
			return list;
		},
		getGreenList: function(assessments) {
			var list = [];
			for(var i = 0; i < assessments.length; i++)
			{
				if(assessments[i].LikelihoodB * assessments[i].SeverityB < 5)
				{
					list.push(assessments[i]);
				}
			}
			return list;
		}
    });
    });