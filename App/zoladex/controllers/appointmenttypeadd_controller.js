steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/appointmenttype.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.AppointmentTypeAdd', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {

            if ($('#Name').val().length < 1) {
                $('.ui-dialog').dialog('close');
                return;
            }

            var structure = { Name: $('#Name').val() };

            new Zoladex.Models.AppointmentType(structure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        },
        onInsertSuccess: function (obj, typeid) {

            if (localStorage.onsubmit == 0) {
                //go back to add new appointment
                localStorage.typeid = typeid;
                $.mobile.changePage('../patientappointmentnew.htm', 'flip', false, true);
            }
            else if (localStorage.onsubmit == 1) {
                //go back to add new appointment
                localStorage.typeid = typeid;
                var id = localStorage.appId;
                localStorage.appId = null;
                $.mobile.changePage('../patientappointmentedit.htm?id=' + id, 'flip', false, true);
            }
        },
        onInsertFail: function () {
            alert("fail");
        }
    });
});