steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/symptom.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomRecord', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();
            var view = $.View('//zoladex/views/symptom_addedit/init.ejs', { Date: "", Time: "", Symptoms: Zoladex.Models.Symptom.findAll() });

            $('#RecordSymptomForm').html(view);

            view.done(this.refreshForm);

            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';
            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd/mm/yy', dateOrder: 'ddMMyy' });
            $('#Time').scroller({ preset: 'time', theme: pickertheme, timeFormat: 'HH:ii' });
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#RecordSymptomForm').valid()) {
                new Zoladex.Models.Symptom(el.formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },

        onUpdateSuccess: function () {
            //$.mobile.changePage('hcplist.htm', 'pop', false, true);
        },

        onUpdateFail: function () {
            //            steal.dev.log('professional has not been added');
            //            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        refreshForm: function () {
            $('#RecordSymptomForm').trigger('create');
            $.mobile.hidePageLoadingMsg();
        }
    });
    });