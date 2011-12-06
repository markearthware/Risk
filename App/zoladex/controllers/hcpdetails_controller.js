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
            var params = this.getQueryStringParams();

            var deffered = Zoladex.Models.Hcp.findOne(params.id);

            deffered.done(this.callback('insertData'));
        },

        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1];

            return $.String.deparam(queryString);
        },

        insertData: function (data) {
           
            $('#HcpDetailsPage h1').html(data.FullName());

            var editLink = $('#EditHcpButton').attr('href') + data.id;

            $('#EditHcpButton').attr('href', editLink);

            var view = this.view('//zoladex/views/hcp_details/init.ejs', data);

            $('#HcpDetailsList', this.element).append(view);

            $('#HcpDetailsList').listview('refresh');

            $.mobile.hidePageLoadingMsg();
        },

        onDelete: function () {
            
            $.mobile.changePage("/zoladex/pages/hcp/hcplist.htm");
        },

        '#DeleteHcpButton click': function (el) {
            // hack to maintain context in the on button click handler
            var self = this;
            $(el).simpledialog({
                'mode': 'bool',
                'prompt': 'Are you sure you want to do this?',
                'useModal': true,
                'buttons': {
                    'OK': {
                        click: function () {
                            Zoladex.Models.Hcp.destroy($("#id").val()).done(self.onDelete);
                        }
                    },
                    'Cancel': {
                        click: function () {
                            //required for the dialog to close (for no obvious reason)
                        },
                        icon: "delete",
                        theme: "c"
                    }
                }
            });
        }
    });
});