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
    '../views/patientappointment_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentEdit', {
    },
    {
        init: function () {
            // show loading screen
            $.mobile.showPageLoadingMsg();

            $.validator.setDefaults({
                errorPlacement: function (error, element) {
                    $(element).attr({ "title": error.text() });
                },
                highlight: function (element) {
                    if ($(element).is('select')) {
                        element = $(element).parent().get(0);
                        $(element).removeClass("textinput");
                        $(element).addClass("errorHighlight");
                    }
                    else {
                        $(element).removeClass("textinput");
                        $(element).addClass("errorHighlight");
                    }

                },
                unhighlight: function (element) {

                    if ($(element).is('select')) {
                        element = $(element).parent().get(0);
                        $(element).removeClass("errorHighlight");
                        $(element).addClass("textinput");
                    }
                    else {
                        $(element).removeClass("errorHighlight");
                        $(element).addClass("textinput");
                    }
                }
            });
        },

        loadData: function () {
            // load drop down values
            var params = Zoladex.QSUtils.getParams();
            
            var typesdef = Zoladex.Models.AppointmentType.findAll(),
            locsdef = Zoladex.Models.Practice.findAll(),
            hcpdef = Zoladex.Models.Hcp.findAll({ basicdetails: true }),
            appdef = Zoladex.Models.Appointment.findOne(localStorage.appointmentId ? localStorage.appointmentId : params.id);

            localStorage.appointmentId = "";

            var self = this;

            // wait for all deferreds to be completed
            $.when(typesdef, locsdef, hcpdef, appdef).done(function (typesres, locsres, hcpres, appres) {
                // process view
                var locsid = localStorage.locid ? localStorage.locid : appres.HealthcareLocationId;
                var hcpid = params.hcpid ? params.hcpid : appres.HcpId;

                if (localStorage.appLocation) {
                    locsid = localStorage.appLocation;
                    localStorage.appLocation = "";
                }

                if (localStorage.appHcp) {
                    hcpid = localStorage.appHcp;
                    localStorage.appHcp = "";
                }

                var view = $.View('//zoladex/views/patientappointment_addedit/init.ejs',
                {
                    id: appres.id,
                    HcpId: hcpid,
                    TypeId: localStorage.typeid ? localStorage.typeid : appres.TypeId,
                    LocsId: locsid,
                    StartDateTime: appres.StartDateTime,
                    AlertsEnabled: appres.AlertsEnabled,
                    AppointmentLocationId: locsres.id,
                    AppointmentTypeId: typesres.id,
                    Hcps: hcpres,
                    Locs: locsres,
                    Types: typesres
                });
                localStorage.typeid = "";
                localStorage.locid = "";
                // insert html into form and call jquerymobile create on form
                $('#EditAppointmentForm').html(view).trigger('create');

                // add date control enhancements
                self.setupDateTimeControls();

                $('#DeleteAppointmentButton').attr("href", "dialog/appointmentconfirmdialog.htm?id=" + params.id);
                // hide loading message
                $.mobile.hidePageLoadingMsg();
            });
        },

        setupDateTimeControls: function () {
            // add date control enhancements
            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
            $("#StartDate").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
            $('#StartTime').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });


            // add change handlers so date and time fields to update hidden backing field
            $("#StartDate,#StartTime").change(function () {
                // get current start date and start time values and combine
                var combined = $.scroller.parseDate('dd M yy', $("#StartDate").val());
                var newtime = $.scroller.parseDate('H:i', $("#StartTime").val());
                combined.setHours(newtime.getHours());
                combined.setMinutes(newtime.getMinutes());

                // set hidden field to combined ticks
                $("#StartDateTime").val(combined.getTime());
            });

            //////add custom validation rule
            jQuery.validator.addMethod("mustBeInFuture", function (value, element) {

                var now = new Date().getTime();
                var ticks = $("#StartDateTime").val();

                return now < ticks;
            }, "* Appointment date/time must be in the future");

            jQuery.validator.addClassRules({
                mustBeInFuture: { mustBeInFuture: true }
            });
            ////end custom validation rule
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
                $.mobile.changePage('../hcp/hcpnew.htm?onsubmit=1&' + 'id=' + params.id, 'flip', false, true);
            }
        },
        '#TypeId change': function () {
            if ($("#TypeId option:selected").val() == -1) {
                var params = Zoladex.QSUtils.getParams();
                localStorage.onsubmit = 1;
                localStorage.appId = params.id;
                localStorage.appHcp = $("#HcpId option:selected").val();
                localStorage.appLocation = $("#HealthcareLocationId option:selected").val();
                $.mobile.changePage('../calendar/dialog/typenew.htm', 'flip', false, true);
            }
        },
        '#HealthcareLocationId change': function () {
            if ($("#HealthcareLocationId option:selected").val() == 0) {
                localStorage.appointmentId = $("#id").val();
                localStorage.appHcp = $("#HcpId option:selected").val();
                $.mobile.changePage('../hcp/practicenew.htm', 'flip', false, true);
            }
        }
    });
});
