steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#PracticeListList');
        },
        loadData: function () {
            var view = new $.View('//zoladex/views/practice_list/init.ejs', Zoladex.Models.Practice.findAll(), null, this.callback(this.refreshList));

            this.element.html(view);
        },
        refreshList: function () {

            $.mobile.hidePageLoadingMsg();

            this.list.listview('refresh');
        }
    });
});