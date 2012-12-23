steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../models/hazards.js',
    '../models/assessments.js',
    '../lib/WebSQL/db.js',
    '../views/myassessments/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.MyAssessments', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
			var self = this;
            var assessmentsDef = Risk.Models.Assessments.findAll(localStorage.taskId);
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            var view;
            $.when(assessmentsDef, taskDef).done(function (assessmentsRes, taskRes) {
				var amberList = self.getAmberList(assessmentsRes);
				var greenList = self.getGreenList(assessmentsRes);
                view = $.View('//risk/views/myassessments/init.ejs', {ambers: amberList, greens: greenList});
                $('#MyAssessmentsContent').html(view);
                $('#MyAssessmentsList').listview();
                var divider = $('#divider');
                divider.text("Risks assessments for task: " + taskRes.Name);
                $('.task').text("'" + taskRes.Name + "'");

                $('#MyAssessmentsPage').trigger("create");
            });
        },
        '.assessment-item click': function (el) {
            var id = $(el).attr("id");
            var assessmentDef = Risk.Models.Assessments.findOne(id);
            $.when(assessmentDef).done(function (assessmentRes) {
                localStorage.hazardId = assessmentRes.HazardId;
                localStorage.editAssessmentId = id;
                localStorage.assessmentId = id;
                $.mobile.changePage("details.htm");
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
		}
    });
    });