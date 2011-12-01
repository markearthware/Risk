steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/appointment.js',
    '../models/appointmenttype.js',
    '../models/healthcare_location.js',
    '../models/hcp.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentAdd', {
        },
    {
        init: function () {
            // show loading screen
            $.mobile.showPageLoadingMsg();

            var hcpdef;

            // load drop down values
            var typesdef = Zoladex.Models.AppointmentType.findAll(),
            locsdef = Zoladex.Models.HealthcareLocation.findAll(),
            hcpdef = Zoladex.Models.Hcp.findAll({ basicdetails: true });


            // wait for all deferreds to be completed
            $.when(typesdef, locsdef, hcpdef).done(function (typesres, locsres, hcpres) {
                // process view
                var view = $.View('//zoladex/views/patientappointment_addedit/init.ejs', { Id: "", HcpId: 0,
                    AppointmentLocationId: 0,
                    AppointmentTypeId: 0,
                    Hcps: hcpres,
                    Locs: locsres,
                    Types: typesres
                });
                // insert html into form and call jquerymobile create on form
                $('#NewAppointmentForm').html(view).trigger('create');

                // hide loading message
                $.mobile.hidePageLoadingMsg();
            });
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