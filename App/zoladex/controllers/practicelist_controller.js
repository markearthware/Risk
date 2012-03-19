steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/practice_list/init.ejs',
    '../views/practice_list_empty/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeList', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();
        },
        loadData: function () {

            var listDef = Zoladex.Models.Practice.findAll();
            var view;

            $.when(listDef).done(function (listRes) {
                if (listRes.length > 0) {
                    view = $.View('//zoladex/views/practice_list/init.ejs', listRes);
                }
                else {
                    view = $.View('//zoladex/views/practice_list_empty/init.ejs');
                }

                $('#PracticeContent').html(view);

                $('#PracticeList').listview();

                $.mobile.hidePageLoadingMsg();
            });
        }

    });
    });

