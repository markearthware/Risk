steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.Index', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();
            var view = $.View("//zoladex/views/index/init.ejs");
            $('#indexContent').html(view);
            $('#header').html("Prostate Assistant");
            $.mobile.hidePageLoadingMsg();
        }
    });
    });