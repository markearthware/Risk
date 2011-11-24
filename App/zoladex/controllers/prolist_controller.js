steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.ProList', {
    },
    {
        init: function () {

            this.list = $('#ProListList');

            //show loading
            $.mobile.showPageLoadingMsg();

            localStorageDB.init(this.callback(function () {

                for (var i = 0; i < localStorageDB.hcps.length; i++) {
                    var item = localStorageDB.hcps[i];
                    this.addElement(item);
                }

                //refresh list
                this.list.listview('refresh');

                // hide loading
                $.mobile.hidePageLoadingMsg();
            }));
        },
        addElement: function (item) {
            this.list.append('<li><a>' + item.Title + ' ' + item.FirstName + ' ' + item.Surname + '</a></li>');
        }
    });
});