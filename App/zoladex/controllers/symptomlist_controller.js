steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/patientsymptomlistitem.js',
    '../lib/WebSQL/db.js',
     '../views/symptom_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SymptomList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#SymptomListContainer');
        },
        loadData: function () {
            Zoladex.Models.PatientSymptomListItem.findAll(this).done(this.callback('onDataLoaded'));
        },
        onDataLoaded: function (result) {
            $('#SymptomListContainer').html($.View('//zoladex/views/symptom_list/init.ejs', result));
            $.mobile.hidePageLoadingMsg();
            this.list.listview();
        }
    });
});