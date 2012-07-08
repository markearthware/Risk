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
                $.mobile.changePage("dialog/choose.htm");
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
        '.emailReport click': function () {
            if (this.hasInternetConnection()) {
                $.mobile.changePage("emailReport.htm");
            }
            else {
                $.mobile.changePage("dialog/notconnected.htm");
            }
        },
        hasInternetConnection: function () {
            if (navigator.network) {
                var networkState = navigator.network.connection.type;

                if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
    });
    });