steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/appointment.js',
    '../models/appointmenttype.js',
    '../models/healthcare_location.js',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../lib/mobiscroll/css/mobiscroll-1.5.2.css',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../views/patientappointment_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentAdd', {
    },
    {
        init: function () {
            // show loading screen
            $.mobile.showPageLoadingMsg();


            // load drop down values
            var typesdef = Zoladex.Models.AppointmentType.findAll(),
            locsdef = Zoladex.Models.Practice.findAll(),
            hcpdef = Zoladex.Models.Hcp.findAll({ basicdetails: true });

            var params = Zoladex.QSUtils.getParams();
            var locsid = params.locid ? params.locid : -1;
            var hcpid = params.hcpid ? params.hcpid : -1;

            // wait for all deferreds to be completed
            $.when(typesdef, locsdef, hcpdef).done(function (typesres, locsres, hcpres) {
                // process view
                var view = $.View('//zoladex/views/patientappointment_addedit/init.ejs', { Id: "", HcpId: hcpid,
                    AppointmentLocationId: 0,
                    AppointmentTypeId: 0,
                    Hcps: hcpres,
                    Locs: locsres,
                    Types: typesres,
                    LocsId: locsid
                });
                // insert html into form and call jquerymobile create on form
                $('#NewAppointmentForm').html(view).trigger('create');

                // add date control enhancements
                var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
                $("#StartDate").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
                $('#StartTime').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });

                // hide loading message
                $.mobile.hidePageLoadingMsg();
            });
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewAppointmentForm').valid()) {
                steal.dev.log('insert appointment form is valid, attempting to save to database...');
                new Zoladex.Models.Appointment(el.formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },
        onInsertSuccess: function () {
            $.mobile.changePage('dialog/success.htm', 'pop', false, true);
        },
        onInsertFail: function () {
            steal.dev.log('appointment has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },
        '#HcpId change': function () {
            if ($("#HcpId option:selected").val() == 0) {
                $.mobile.changePage('../hcp/hcpnew.htm?onsubmit=0', 'flip', false, true);
            }
        },
        '#HealthcareLocationId change': function () {
            if ($("#HealthcareLocationId option:selected").val() == 0) {
                $.mobile.changePage('../hcp/practicenew.htm?onsubmit=0', 'flip', false, true);
            }
        }
    });
});