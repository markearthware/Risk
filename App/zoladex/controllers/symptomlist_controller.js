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
            var sortedResult = result.sort(this.sortByDate);
            $('#SymptomListContainer').html($.View('//zoladex/views/symptom_list/init.ejs', sortedResult));
            $.mobile.hidePageLoadingMsg();
            this.list.listview();
        },
        sortByDate: function (a, b) {
            return (parseInt(a.Date.getTime()) - parseInt(b.Date.getTime()));
        }
    });
});