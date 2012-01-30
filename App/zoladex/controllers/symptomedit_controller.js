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

                if (localStorage.stid !== '') {
                    rec.SymptomId = localStorage.stid;
                }
                localStorage.stid = '';

                var view = $.View('//zoladex/views/symptom_addedit/init.ejs', rec);

                $('#EditSymptomForm').html(view).trigger('create');

                var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
                $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
                $('#Time').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });

                $('.ui-radio:last-of-type input').bind('change',function (evt) {
                    localStorage.onsubmit = 0;
                    $.mobile.changePage('../dialog/typenew.htm', 'flip', false, true);
                });
                
                self.setupDateTimeControls();

                $.mobile.hidePageLoadingMsg();
            });
        },
        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#EditSymptomForm').valid()) {
                new Zoladex.Models.PatientSymptom(el.formParams()).save(this.callback('onUpdateSuccess'), this.callback('onUpdateFail'));
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

        onUpdateSuccess: function (justAdded) {

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

        onUpdateFail: function () {
            // todo: dialog
        },
        
        destroy: function () {
            $('.ui-radio:last-of-type input').unbind();
            this._super();
        }
    });
});