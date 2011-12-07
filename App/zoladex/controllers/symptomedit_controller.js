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

            var params = Zoladex.QSUtils.getParams();

            var recordedSymptomDef = Zoladex.Models.PatientSymptom.findOne(params.id); 
            
            $('#DeleteSymptomButton').attr("href", "../dialog/symptomconfirmdialog.htm?id=" + params.id);

            var allSymptomsDef = Zoladex.Models.Symptom.findAll();

            $.when(recordedSymptomDef, allSymptomsDef).done(function (rec, all) {

                var view = new $.View('//zoladex/views/symptom_addedit/init.ejs', { Symptoms: allSymptomsDef, Date: recordedSymptomDef.Date, Time: recordedSymptomDef.Time });

                $('#EditSymptomForm').html(view);

                view.done(function () {

                    $('#id').val(rec.id);
                    $("#SymptomId").val(rec.SymptomId);
                    $("#Date").val(rec.Date);
                    $("#Time").val(rec.Time);

                    var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
                    $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd/mm/yy', dateOrder: 'ddMMyy' });
                    $('#Time').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });

                    $('#EditSymptomForm').trigger('create');

                   

                    $.mobile.hidePageLoadingMsg();

                });
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

        onUpdateSuccess: function () {
            $.mobile.changePage("symptomslist.htm");
        },

        onUpdateFail: function () {
            // todo: dialog
        }
    });
});