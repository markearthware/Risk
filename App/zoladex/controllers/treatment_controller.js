steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/mobiscroll/css/mobiscroll-1.5.2.css',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../views/treatment/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.Treatment', {
        },
    {
        init: function () {

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
                        $('#date-error').remove();
                        $('#date-label').after("<span id='date-error'>*Date must be in the past</span>");
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

            var date = "";

            if (localStorage.treatmentDate) {
                date = new Date(localStorage.treatmentDate);
            }

            var view = $.View("//zoladex/views/treatment/init.ejs",
                {
                    date: date
                }
            );

            $('#TreatmentForm').html(view);

            this.setupDateTimeControls();

        },

        submit: function () {

            if ($('#TreatmentForm').valid()) {
                var formParams = $('#TreatmentForm').formParams();
                $.mobile.showPageLoadingMsg();
                //localstorage save - would only be one record in db so no point having a table.
                localStorage.treatmentNhsNumber = formParams.nhsnumber;
                localStorage.treatmentHospitalNumber = formParams.hospitalnumber;
                localStorage.treatmentPsaLevel = formParams.PsaLevel;
                localStorage.treatmentBiopsy = formParams.biopsy;
                localStorage.treatmentCores = formParams.cores;
                localStorage.treatmentGleason = formParams.gleason;
                localStorage.treatmentTStage = formParams.tstage;
                localStorage.treatmentTreatment = formParams.treatment;
                localStorage.treatmentDate = formParams.date ? $.scroller.parseDate('dd M yy', formParams.date) : "";
                $.mobile.hidePageLoadingMsg();
                $.mobile.changePage('treatmentdetails.htm', 'flip', false, true);
            }

            return false;
        },

        setupDateTimeControls: function () {
            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });

            // add change handlers so date and time fields to update hidden backing field
            $("#Date").change(function () {
                // get current start date and start time values and combine
                var combined = $.scroller.parseDate('dd M yy', $("#Date").val());
                combined.setHours(combined.getHours());
                combined.setMinutes(combined.getMinutes());

                // set hidden field to combined ticks
                $("#DateTicks").val(combined.getTime());
            });

            $.validator.addMethod("mustBeInPast", function (value, element) {

                var now = new Date().getTime();
                var ticks = $("#DateTicks").val();

                return now > ticks;
            }, "* Treatment started date must be in the past");

            jQuery.validator.addClassRules({
                mustBeInPast: { mustBeInPast: true }
            });
            this.element.validate({ submitHandler: this.callback('submit') });
        },

        '.furtherDetails click': function () {

            localStorage.expandAccordion = "true";
            $.mobile.changePage('../../support/questions/test.htm', 'flip', false, true);
        }

    });
    });