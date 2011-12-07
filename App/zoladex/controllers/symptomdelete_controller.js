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
            var params = Zoladex.QSUtils.getParams();
            Zoladex.Models.PatientSymptom.destroy(params.id);
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
    });