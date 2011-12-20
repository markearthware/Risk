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

            var structure = { Name: $('#Name').val() };

            new Zoladex.Models.AppointmentType(structure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        },
        onInsertSuccess: function (obj, typeid) {

            if (localStorage.onsubmit) {

                if (localStorage.onsubmit == 0) {
                    //go back to add new appointment
                    localStorage.typeid = typeid;
                    $.mobile.changePage('../calendar/patientappointmentnew.htm', 'flip', false, true);
                }
            }
            else { //standard procedure
                $.mobile.changePage('hcplist.htm', 'pop', false, true);
            }
        },
        onInsertFail: function () {
            alert("fail");
        }
    });
});