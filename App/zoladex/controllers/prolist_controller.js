steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/professional.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.ProList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#ProListList');
        },
        loadData: function () {
            var view = new $.View('//zoladex/views/pro_list/init.ejs', Zoladex.Models.Professional.findAll(), null, this.callback(this.refreshList));

            this.element.html(view);
        },
        refreshList: function () {

            $.mobile.hidePageLoadingMsg();

            this.list.listview('refresh');
        }
    });
});