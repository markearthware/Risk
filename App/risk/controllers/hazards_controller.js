steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../lib/WebSQL/db.js',
    '../views/hazards/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Hazards', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var listDef = Risk.Models.Hazards.findAll();
            var view;
            $.when(listDef).done(function (listRes) {
                view = $.View('//risk/views/hazards/init.ejs', listRes);
                $('#HazardsContent').html(view);
                $('#HazardsList').listview();
            });
        },
        '.hazard-item click': function () {
            alert("sucess");
        }
    });
});