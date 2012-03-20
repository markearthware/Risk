steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/group.js',
    '../lib/WebSQL/db.js',
    '../views/group_list/init.ejs',
    '../views/group_list_empty/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.GroupList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
        },
        loadData: function () {

            var listDef = Zoladex.Models.Group.findAll();
            var view;

            $.when(listDef).done(function (listRes) {
                if (listRes.length > 0) {
                    view = $.View('//zoladex/views/group_list/init.ejs', listRes);
                }
                else {
                    view = $.View('//zoladex/views/group_list_empty/init.ejs');
                }

                $('#GroupContent').html(view);

                $('#GroupList').listview();

                $.mobile.hidePageLoadingMsg();
            });
           
        }
      
    });
});

