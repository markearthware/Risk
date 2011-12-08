steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/appointment.js',
    '../models/appointmenttype.js',
    '../models/practice.js',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../lib/mobiscroll/css/mobiscroll-1.5.2.css',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../views/patientappointment_addedit/init.ejs'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentEdit', {
    },
    {
        init: function () {
            // show loading screen
            $.mobile.showPageLoadingMsg();
        },

        loadData: function () {
            var params = Zoladex.QSUtils.getParams();
            // load drop down values
            var typesdef = Zoladex.Models.AppointmentType.findAll(),
            locsdef = Zoladex.Models.Practice.findAll(),
            hcpdef = Zoladex.Models.Hcp.findAll({ basicdetails: true }),
            appdef = Zoladex.Models.Appointment.findOne(params.id);

            // wait for all deferreds to be completed
            $.when(typesdef, locsdef, hcpdef, appdef).done(function (typesres, locsres, hcpres, appres) {
                // process view
                var view = $.View('//zoladex/views/patientappointment_addedit/init.ejs',
                {
                    id: appres.id,
                    HcpId: appres.HcpId,
                    TypeId: appres.TypeId,
                    LocsId: appres.HealthcareLocationId,
                    StartDate: appres.StartDate,
                    StartTime: appres.StartTime,
                    AlertsEnabled: appres.AlertsEnabled,
                    AppointmentLocationId: locsres.id,
                    AppointmentTypeId: typesres.id,
                    Hcps: hcpres,
                    Locs: locsres,
                    Types: typesres
                });
                // insert html into form and call jquerymobile create on form
                $('#EditAppointmentForm').html(view).trigger('create');

                // add date control enhancements
                var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
                $("#StartDate").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
                $('#StartTime').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });

                $('#DeleteAppointmentButton').attr("href", "dialog/appointmentconfirmdialog.htm?id=" + params.id);
                // hide loading message
                $.mobile.hidePageLoadingMsg();
            });
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#EditAppointmentForm').valid()) {
                steal.dev.log('insert appointment form is valid, attempting to save to database...');
                new Zoladex.Models.Appointment(el.formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },

        onInsertSuccess: function () {
            $.mobile.changePage('calendar.htm', 'pop', false, true);
        },

        onInsertFail: function () {
            steal.dev.log('appointment has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },
        '#HcpId change': function () {
            if ($("#HcpId option:selected").val() == 0) {
                var params = Zoladex.QSUtils.getParams();
                $.mobile.changePage('../hcp/hcpnew.htm?onsubmit=1&'+'id='+params.id , 'flip', false, true);
            }
        },
        '#HealthcareLocationId change': function () {
            if ($("#HealthcareLocationId option:selected").val() == 0) {
                var params = Zoladex.QSUtils.getParams();
                $.mobile.changePage('../hcp/practicenew.htm?onsubmit=1&' + 'id=' + params.id, 'flip', false, true);
            }
        }
    });
});