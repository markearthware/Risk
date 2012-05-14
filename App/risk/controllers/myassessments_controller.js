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
            var assessmentsDef = Risk.Models.Assessments.findAll(localStorage.taskId);
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            var view;
            $.when(assessmentsDef, taskDef).done(function (assessmentsRes, taskRes) {
                view = $.View('//risk/views/myassessments/init.ejs', assessmentsRes);
                $('#MyAssessmentsContent').html(view);
                $('#MyAssessmentsList').listview();
                var header = $('#header');
                header.text("Risks assessments for '" + taskRes.Name + "'");
                $('#MyAssessmentsPage').trigger("create");
            });
        },
        '.assessment-item click': function (el) {
            //todo
        },
        '.delete click': function (el) {
            var self = this;
            var id = $(el).attr("id");
            var assessmentsDef = Risk.Models.Assessments.deleteOne(id);
            $.when(assessmentsDef).done(function (assessmentsRes) {
                self.init();
            });
        }
    });
});