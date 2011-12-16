steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/patientsymptom.js',
    '../lib/WebSQL/db.js',
    '../views/symptom_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomAdd', {
    },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

            var date = new Date();

            var view = $.View('//zoladex/views/symptom_addedit/init.ejs', { DateTime: date, Symptoms: Zoladex.Models.Symptom.findAll() });

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

        onInsertSuccess: function () {
            $.mobile.changePage('symptomslist.htm', 'pop', false, true);
        },

        onInsertFail: function () {
            //todo: handle erorrs
            //            steal.dev.log('professional has not been added');
            //            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        refreshForm: function () {

            $('#RecordSymptomForm').trigger('create');

            this.setupDateTimeControls();

            $.mobile.hidePageLoadingMsg();
        }
    });
});