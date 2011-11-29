steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpDetails', {
    },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();
        },
        loadData: function () {
            var view = new $.View('//zoladex/views/hcp_details/init.ejs', Zoladex.Models.Hcp.findOne(1322561126028), null, this.callback(this.refreshList));

            this.element.html(view);
        },
        refreshList: function () {
            $('#HcpDetailsPage').trigger('create');
            $.mobile.hidePageLoadingMsg();
        }
    });
});