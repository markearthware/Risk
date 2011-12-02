steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/patientsymptom.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomList', {
        },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#SymptomListContainer');
        },
        loadData: function () {

            var view = new $.View('//zoladex/views/symptom_list/init.ejs', Zoladex.Models.PatientSymptom.findAll(this), null, this.callback(this.refreshList));

            this.element.append(view);
        },
        refreshList: function () {

            $.mobile.hidePageLoadingMsg();

            this.list.listview();
        }
    });
});