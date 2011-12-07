steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/appointment.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentDelete', {
        },
    {
        init: function () {


        },

        '#confirmYes click': function (el) {
            var params = Zoladex.QSUtils.getParams();
            Zoladex.Models.Appointment.destroy(params.id);
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
    });