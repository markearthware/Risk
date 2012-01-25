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

                    var locsid = localStorage.locid ? localStorage.locid : -1;
                    var hcpid = localStorage.hcpId ? localStorage.hcpId : -1;
                    localStorage.hcpId = "";
                    localStorage.locid = "";
                    this.element.validate({ submitHandler: this.callback('onSubmit') });
                    var self = this;

                    // load drop down values
                    var typesdef = Zoladex.Models.AppointmentType.findAll(),
                        locsdef = Zoladex.Models.Practice.findAll(),
                        hcpdef = Zoladex.Models.Hcp.findAll({ basicdetails: true });

                    if (localStorage.appLocation) {
                        locsid = localStorage.appLocation;
                        localStorage.appLocation = "";
                    }

                    if (localStorage.appHcp) {
                        hcpid = localStorage.appHcp;
                        localStorage.appHcp = "";
                    }

                    // wait for all deferreds to be completed
                    $.when(typesdef, locsdef, hcpdef).done(function (typesres, locsres, hcpres) {
                        // process view
                        var view = $.View('//zoladex/views/patientappointment_addedit/init.ejs', { Id: "", HcpId: hcpid,
                            AppointmentLocationId: 0,
                            AppointmentTypeId: 0,
                            Hcps: hcpres,
                            Locs: locsres,
                            Types: typesres,
                            TypeId: localStorage.typeid ? localStorage.typeid : "",
                            LocsId: locsid
                        });
                        localStorage.typeid = "";
                        localStorage.locid = '';
                        // insert html into form and call jquerymobile create on form
                        $('#NewAppointmentForm').html(view).trigger('create');

                        self.setupDateTimeControls();
                        
                        // hide loading message
                        $.mobile.hidePageLoadingMsg();
                    });
                },

                onSubmit: function (form) {
                    steal.dev.log('insert appointment form is valid, attempting to save to database...');
                    new Zoladex.Models.Appointment($(form).formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
                },

                '#StartDate focus': function () {
                    var tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    $('#StartDate').scroller('setDate', tomorrow, true);
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

                    //////start custom validation rule
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

                onInsertSuccess: function () {
                    $.mobile.changePage('calendar.htm', 'pop', false, true);
                },
                onInsertFail: function () {
                    steal.dev.log('appointment has not been added');
                    $.mobile.changePage('dialog/error.htm', 'pop', false, true);
                },
                '#HcpId change': function () {
                    if ($("#HcpId option:selected").val() == -1) {
                        $.mobile.changePage('../hcp/hcpnew.htm?onsubmit=0', 'flip', false, true);
                    }
                },

                '#TypeId change': function () {
                    if ($("#TypeId option:selected").val() == -1) {
                        localStorage.appHcp = $("#HcpId option:selected").val();
                        localStorage.appLocation = $("#HealthcareLocationId option:selected").val();
                        localStorage.onsubmit = 0;
                        $.mobile.changePage('../calendar/dialog/typenew.htm', 'flip', false, true);

                    }
                },


                '#HealthcareLocationId change': function () {
                    if ($("#HealthcareLocationId option:selected").val() == -1) {
                        localStorage.appHcp = $("#HcpId option:selected").val();
                        localStorage.onsubmit = 0;
                        $.mobile.changePage('../hcp/practicenew.htm', 'flip', false, true);
                    }
                }
            });
});