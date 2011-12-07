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

        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1].split('#')[0];

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

            // if android delay this as has issues with changepages clashing
            if (navigator.userAgent.indexOf('Android') > 0) {
                var code = '$.mobile.changePage("' + baseurl + '/zoladex/pages/hcp/hcplist.htm");';
                setTimeout(code, 1000);
            }
            else {
                $.mobile.changePage(baseurl + "/zoladex/pages/hcp/hcplist.htm");
            }
        },

        '#DeleteHcpButton click': function (el) {
            //alert("delete clicked");
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