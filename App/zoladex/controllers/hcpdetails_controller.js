steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../lib/jQuerySimpleDialog/jquery.mobile.simpledialog.min.css',
    '../lib/jQuerySimpleDialog/jquery.mobile.simpledialog.min.js',
    '../views/hcp_details/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpDetails', {
        },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
        },

        loadData: function () {

            //get query string params
            var params = Zoladex.QSUtils.getParams();
            var deffered = Zoladex.Models.Hcp.findOne(params.id);

            deffered.done(this.callback('insertData'));
        },

        insertData: function (data) {

            $('#HcpDetailsPage h1').html(data.FullName());

            var editLink = $('#EditHcpButton').attr('href') + data.id;

            $('#EditHcpButton').attr('href', editLink);

            var view = this.view('//zoladex/views/hcp_details/init.ejs', data);

            $('#HcpDetailsList', this.element).append(view);

            $('#HcpDetailsList').listview('refresh');

            $('#DeleteHcpButton').attr("href", "dialog/confirmdialog.htm?id=" + data.id);

            $.mobile.hidePageLoadingMsg();
        }
    });
    });