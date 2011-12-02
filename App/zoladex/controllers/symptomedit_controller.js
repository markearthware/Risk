steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/symptom.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomEdit', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

            var params = this.getQueryStringParams();

            var recordedSymptomDef = Zoladex.Models.PatientSymptom.findOne(params.Id);

            var allSymptomsDef = Zoladex.Models.Symptom.findAll();

            $.when(recordedSymptomDef, allSymptomsDef).done(function (rec, all) {

                var view = new $.View('//zoladex/views/symptom_addedit/init.ejs', { Symptoms: allSymptomsDef, Date: recordedSymptomDef.Date, Time: recordedSymptomDef.Time });

                $('#EditSymptomForm').html(view);

                view.done(function () {
                    
                    $("#SymptomId").val(rec.SymptomId);
                    $("#Date").val(rec.getFormatedDate());
                    $("#Time").val(rec.getFormatedTime());

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

            if ($('#EditHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');
                new Zoladex.Models.Hcp(el.formParams()).save(this.callback(this.onUpdateSuccess), this.callback('onUpdateFail'));
            }

            return false;
        },

        onUpdateSuccess: function () {
            //todo: redirects
        },

        onUpdateFail: function () {
           // todo: dialog
        },

        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1];

            return $.String.deparam(queryString);
        }
    });
    });