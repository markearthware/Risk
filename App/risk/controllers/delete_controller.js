steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/assessments.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.Delete', {
    },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../myassessments.htm",{ transition: "none"});
        },
        '.yes click': function (el) {
            var self = this;
            var id = localStorage.deleteAssessmentId;
            var assessmentsDef = Risk.Models.Assessments.deleteOne(id);
            $.when(assessmentsDef).done(function (assessmentsRes) {
                $.mobile.changePage("../myassessments.htm",{ transition: "none"});
            });
        }
    });
});