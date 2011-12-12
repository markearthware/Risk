steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/alert.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.Home', {
    },
    {
        init: function () {

            var alertsdef = Zoladex.Models.Alert.findAll();

            $.when(alertsdef).done(function (alertres) {

                steal.dev.log(alertres);

                if (alertres.length > 0) {
                    alert("hello");

                    $.mobile.changePage('../pages/hcp/dialog/alertdialog.htm?id=' + alertres[0].id);
                }
            });
        }
    });
});