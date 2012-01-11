steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/symptom.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomTypeAdd', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {

            if ($('#Name').val().length < 1) {
                $('.ui-dialog').dialog('close');
                return;
            }

            var structure = { Description: $('#Name').val(), WarningSign: -1 };

            new Zoladex.Models.Symptom(structure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        },
        onInsertSuccess: function (obj, stid) {

            if (localStorage.onsubmit == 0) {
                //go back to add new appointment
                localStorage.stid = stid;
                $.mobile.changePage('../symptoms/symptomrecord.htm', 'flip', false, true);
            }
            else if (localStorage.onsubmit == 1) {
                //go back to add new appointment
                localStorage.stid = stid;
                var id = localStorage.symptomId;
                localStorage.symptomId = null;
                $.mobile.changePage('../symptoms/symptomedit.htm?id=' + id, 'flip', false, true);
            }

        },
        onInsertFail: function () {
            alert("fail");
        }
    });
});