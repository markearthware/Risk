steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/symptom.js',
    '../lib/jQuerySimpleDialog/jquery.mobile.simpledialog.min.css',
    '../lib/jQuerySimpleDialog/jquery.mobile.simpledialog.min.js',
    '../views/symptom_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomEdit', {
    },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

            var params = this.getQueryStringParams();

            var recordedSymptomDef = Zoladex.Models.PatientSymptom.findOne(params.Id);

            var allSymptomsDef = Zoladex.Models.Symptom.findAll();

            $("#DeleteSymptomButton").click(this.callback(this.deleteClicked));

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
        
        onDelete: function () {
             // if android delay this as has issues with changepages clashing
            if (navigator.userAgent.indexOf('Android') > 0) {
                setTimeout('$.mobile.changePage("/zoladex/pages/progress/symptoms/symptomslist.htm");', 1000);
            }
            else {
                $.mobile.changePage("/zoladex/pages/progress/symptoms/symptomslist.htm");
            }
        },

        deleteClicked: function (e) {
            // hack to maintain context in the on button click handler
            var self = this;
            $(e.target).simpledialog({
                'mode': 'bool',
                'prompt': 'Are you sure you want to do this?',
                'useModal': true,
                'buttons': {
                    'OK': {
                        click: function () {
                            Zoladex.Models.PatientSymptom.destroy($("#id").val()).done(self.onDelete);     
                        }
                    },
                    'Cancel': {
                        click: function () {
                            //required for the dialog to close (for no obvious reason)
                        },
                        icon: "delete",
                        theme: "c"
                    }
                }
            });
        },

        onUpdateSuccess: function () {
            $.mobile.changePage("symptomslist.htm");
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