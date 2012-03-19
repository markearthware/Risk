steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpList', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();
            this.content = $('#HcpContent');
        },

        loadData: function () {

            var listDef = Zoladex.Models.Hcp.findAll();
            var view;

            $.when(listDef).done(function (listRes) {
                if (listRes.length > 0) {
                    view = $.View('//zoladex/views/hcp_list/init.ejs', listRes);
                }
                else {
                    view = $.View('//zoladex/views/hcp_list_empty/init.ejs');
                }
                
                $('#HcpContent').html(view);
                
                $('#HcpList').listview();    
                
                $.mobile.hidePageLoadingMsg();
            });
        }
    });
    });