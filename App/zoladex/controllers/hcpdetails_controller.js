steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
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

            //get query string params
            var params = this.getQueryStringParams();

            var deffered = Zoladex.Models.Hcp.findOne(params.Id);

            deffered.done(this.callback('insertData'));
        },

        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1];

            return $.String.deparam(queryString);
        },

        insertData: function (data) {

            $('#HcpDetailsPage h1').html(Zoladex.Models.Hcp.buildName(data.item(0)));

            var editLink = $('#EditHcpButton').attr('href') + data.item(0).Id;

            $('#EditHcpButton').attr('href', editLink);

            var view = this.view('//zoladex/views/hcp_details/init.ejs', data);

            $('#HcpDetailsList', this.element).append(view);

            $('#HcpDetailsPage ul').listview('refresh');

            $.mobile.hidePageLoadingMsg();
        }
    });
    });