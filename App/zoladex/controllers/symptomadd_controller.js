steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/patientsymptom.js',
    '../models/symptom.js',
    '../lib/WebSQL/db.js',
    '../views/symptom_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomAdd', {
    },
    {
        init: function () {
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

            var date = new Date();

            var view = $.View('//zoladex/views/symptom_addedit/init.ejs', { DateTime: date, Symptoms: Zoladex.Models.Symptom.findAll(), SymptomId: localStorage.stid ? localStorage.stid : 1 });
            localStorage.stid = '';

            $('#RecordSymptomForm').html(view);

            view.done(this.callback(this.refreshForm));


        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#RecordSymptomForm').valid()) {
                new Zoladex.Models.PatientSymptom(el.formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },

        setupDateTimeControls: function () {
            // add date control enhancements
            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
            $('#Time').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });

            // add change handlers so date and time fields to update hidden backing field
            $("#Date,#Time").change(function () {
                // get current start date and start time values and combine
                var combined = $.scroller.parseDate('dd M yy', $("#Date").val());
                var newtime = $.scroller.parseDate('H:i', $("#Time").val());
                combined.setHours(newtime.getHours());
                combined.setMinutes(newtime.getMinutes());
                // set hidden field to combined ticks
                $("#DateTime").val(combined.getTime());
            });
        },

        onInsertSuccess: function (justAdded) {
            var symptomId = justAdded.SymptomId;

            var deffered = Zoladex.Models.Symptom.findOne(symptomId);

            $.when(deffered).done(function (result) {
                if (result[0].WarningSign == 1) {
                    $.mobile.changePage('../dialog/patientwarningdialog.htm', 'pop', false, true);
                }
                else {
                    $.mobile.changePage('symptomslist.htm', 'pop', false, true);
                }
            });
        },

        onInsertFail: function () {
            //todo: handle erorrs
            //            steal.dev.log('professional has not been added');
            //            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        refreshForm: function () {

            $('#RecordSymptomForm').trigger('create');

            $('.ui-radio:last-of-type input').change(function (evt) {
                localStorage.onsubmit = 0;
                $.mobile.changePage('../dialog/typenew.htm', 'flip', false, true);
            });

            this.setupDateTimeControls();

            $.mobile.hidePageLoadingMsg();
        }
    });
});
