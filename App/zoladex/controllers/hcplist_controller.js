steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#HcpListList');
        },
        loadData: function () {
            var view = new $.View('//zoladex/views/hcp_list/init.ejs', Zoladex.Models.Hcp.findAll(), null, this.callback(this.refreshList));

            this.element.html(view);
        },
        refreshList: function () {

            $.mobile.hidePageLoadingMsg();

            this.list.listview('refresh');
        }
    });
});