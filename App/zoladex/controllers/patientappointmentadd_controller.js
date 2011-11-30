steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentAdd', {
        },
    {
        init: function () {

            // load drop down values
            

            var view = $.View('//zoladex/views/patientappointment_addedit/init.ejs', { Id: "", HcpId: 0,
                AppointmentLocationId: 0, 
                AppointmentTypeId: 0
            });

            $('#NewAppointmentForm').html(view);
        },
        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewAppointmentForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');
                new Zoladex.Models.Hcp(el.formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },
        onInsertSuccess: function () {
            $.mobile.changePage('dialog/success.htm', 'pop', false, true);
        },
        onInsertFail: function () {
            steal.dev.log('professional has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
    });