steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/practice_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#PracticeListList');
        },
        loadData: function () {
            $.View('//zoladex/views/practice_list/init.ejs', Zoladex.Models.Practice.findAll(), null, this.callback(this.refreshList));
        },
        refreshList: function (html) {
            $.mobile.hidePageLoadingMsg();
            this.element.html(html);
            this.list.listview('refresh');
        }
    });
});

