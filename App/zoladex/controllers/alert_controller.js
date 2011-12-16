steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/alert.js',
    '../views/alerts/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.Alerts', {
    },
    {
        init: function () {
            // show loading screen
            $.mobile.showPageLoadingMsg();
            Zoladex.Models.Alert.findAll().done(this.callback('onDataLoaded'));
        },
        onDataLoaded: function (result) {
            $('#dialog').html($.View('//zoladex/views/alerts/init.ejs', result));
            
            $('#dialog').trigger('create');
            // hide loading message
            $.mobile.hidePageLoadingMsg();
        },
        '#OK click': function () {
            alertHasBeenShown = true;
            //dialog automatically closes
        }
    });
});