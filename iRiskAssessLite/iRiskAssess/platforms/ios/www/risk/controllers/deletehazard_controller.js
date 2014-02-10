steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/controls.js',
    '../models/hows.js',
    '../models/assessmentcontrols.js',
    '../models/assessmentexistingcontrols.js',
    '../models/assessments.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.DeleteHazard', {
    },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../hazards.htm", { transition: "none" });
        },
        '.yes click': function (el) {
            var id = localStorage.deleteHazardId;
            var def = new Risk.Models.Hazards.deleteOne(id);
            new Risk.Models.Hows.deleteMany(id);
            new Risk.Models.Controls.deleteMany(id);

            $.when(def).done(function () {
                var assIdsDef = Risk.Models.Assessments.findAllHazardIds(id);
                $.when(assIdsDef).done(function (assIdsRes) {
                    $(assIdsRes).each(function () {
                        Risk.Models.Assessments.deleteManyByHazardId(id);
                        Risk.Models.AssessmentControls.deleteMany(this.id);
                        Risk.Models.AssessmentExistingControls.deleteMany(this.id); 
                    });
                    $.mobile.changePage("../hazards.htm", { transition: "none" });
                });
            });
        }
    });
});