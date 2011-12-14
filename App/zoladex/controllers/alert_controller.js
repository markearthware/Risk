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
            var sortedResult = result.sort(this.sortByDate);

            $('#dialog').html($.View('//zoladex/views/alerts/init.ejs', sortedResult));
            $('#dialog').trigger('create');
            // hide loading message
            $.mobile.hidePageLoadingMsg();
        },
        sortByDate: function (a, b) {
            return (parseInt(a.StartDate.getTime()) - parseInt(b.StartDate.getTime()));
        },
        '#OK click': function () {
            alertHasBeenShown = true;
            //dialog automatically closes
        }
    });
});