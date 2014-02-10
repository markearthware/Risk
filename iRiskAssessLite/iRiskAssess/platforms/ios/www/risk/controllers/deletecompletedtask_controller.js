steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../models/assessments.js',
    '../models/assessmentcontrols.js',
    '../models/assessmentexistingcontrols.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.DeleteCompletedTask', {
        },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../completed.htm", { transition: "none" });
        },
        '.yes click': function (el) {
            var id = localStorage.deleteTaskId; 
            Risk.Models.Task.deleteOne(id);
           
            var assIdsDef = Risk.Models.Assessments.findAllIds(id); 
            $.when(assIdsDef).done(function (assIdsRes) {
                $(assIdsRes).each(function () {
                    Risk.Models.Assessments.deleteOne(this.id);
                    Risk.Models.AssessmentControls.deleteMany(this.id);
                    Risk.Models.AssessmentExistingControls.deleteMany(this.id); 
                });
            });
            $.mobile.changePage("../completed.htm", { transition: "none" }); 
        }
    });
    });