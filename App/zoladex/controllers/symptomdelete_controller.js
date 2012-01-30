steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/symptom.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomDelete', {
    },
    {
        init: function () {


        },

        '#confirmYes click': function (el) {
            var def = Zoladex.Models.PatientSymptom.destroy(localStorage.symptomId);
            $.when(def).done(function () {
                $.mobile.changePage("../symptoms/symptomslist.htm");
            });
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
});