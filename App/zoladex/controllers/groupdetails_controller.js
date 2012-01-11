steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/group.js',
    '../lib/WebSQL/db.js',
    '../views/group_details/init.ejs'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.GroupDetails', {
    },
    {
 
        init: function () {
            steal.dev.log("test1");
            $.mobile.showPageLoadingMsg();
        },

        loadData: function () {

            //get query string params
            var params = Zoladex.QSUtils.getParams();

            var deffered = Zoladex.Models.Group.findOne(params.id);

            $.when(deffered).done(this.callback('insertData'));
        },

        insertData: function (data) {

            $('#GroupDetailsPage h1').html(data.Name);

            var editLink = $('#EditGroupButton').attr('href') + data.id;

            $('#EditGroupButton').attr('href', editLink);

            var view = this.view('//zoladex/views/group_details/init.ejs', data);

            $('#GroupDetailsList', this.element).append(view);

            $('#GroupDetailsList').listview('refresh');

            $('#DeleteGroupButton').attr("href", "dialog/groupconfirmdialog.htm?id=" + data.id);
            
            $.mobile.hidePageLoadingMsg();
        }

     
    });
});