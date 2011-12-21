steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/symptom.js',
    '../views/symptom_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomEdit', {
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

            var self = this;
            var params = Zoladex.QSUtils.getParams();

            var recordedSymptomDef = Zoladex.Models.PatientSymptom.findOne(params.id);

            $('#DeleteSymptomButton').attr("href", "../dialog/symptomconfirmdialog.htm?id=" + params.id);

            var allSymptomsDef = Zoladex.Models.Symptom.findAll();

            $.when(recordedSymptomDef, allSymptomsDef).done(function (rec, all) {

                rec.Symptoms = all;

                if (localStorage.stid !== "null") {
                    rec.SymptomId = localStorage.stid;
                }
                localStorage.stid = null;

                var view = $.View('//zoladex/views/symptom_addedit/init.ejs', rec);

                $('#EditSymptomForm').html(view).trigger('create');

                var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
                $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
                $('#Time').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });

                self.setupDateTimeControls();

                $.mobile.hidePageLoadingMsg();
            });
        },
        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#EditSymptomForm').valid()) {
                new Zoladex.Models.PatientSymptom(el.formParams()).save(this.callback('onUpdateSuccess'), this.callback('onUpdateFail'));
                var params = el.formParams();
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

        '#SymptomId change': function () {
            if ($("#SymptomId option:selected").val() == -1) {
                var params = Zoladex.QSUtils.getParams();
                localStorage.symptomId = params.id;
                localStorage.onsubmit = 1;
                $.mobile.changePage('../dialog/typenew.htm', 'flip', false, true);
            }
        },

        onUpdateSuccess: function () {
            $.mobile.changePage("symptomslist.htm");
        },

        onUpdateFail: function () {
            // todo: dialog
        }
    });
});