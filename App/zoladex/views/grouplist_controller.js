steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/group_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.GroupList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            this.list = $('#GroupListList');
        },
        loadData: function () {
            $.View('//zoladex/views/group_list/init.ejs', Zoladex.Models.Group.findAll(), null, this.callback(this.refreshList));
        },
        refreshList: function (html) {
            $.mobile.hidePageLoadingMsg();
            this.element.html(html);
            this.list.listview('refresh');
        }
    });
});

