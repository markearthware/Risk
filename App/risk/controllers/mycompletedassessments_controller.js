steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../models/hazards.js',
    '../models/assessments.js',
    '../models/assessmentwhos.js',
    '../models/assessmenthows.js',
    '../lib/WebSQL/db.js',
    '../views/mycompletedassessments/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.MyCompletedAssessments', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var assessmentsDef = Risk.Models.Assessments.findAll(localStorage.taskId);
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            var view;
			var self = this;
            $.when(assessmentsDef, taskDef).done(function (assessmentsRes, taskRes) {
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
		},
    });
    });