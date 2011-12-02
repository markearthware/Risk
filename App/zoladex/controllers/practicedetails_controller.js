steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../lib/jQuerySimpleDialog/jquery.mobile.simpledialog.min.css',
    '../lib/jQuerySimpleDialog/jquery.mobile.simpledialog.min.js'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeDetails', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();
        },

        loadData: function () {

            //get query string params
            var params = this.getQueryStringParams();

            var deffered = Zoladex.Models.Practice.findOne(params.id);

            deffered.done(this.callback('insertData'));
        },

        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1];

            return $.String.deparam(queryString);
        },

        insertData: function (data) {

            this.Id = data.Id;

            $('#PracticeDetailsPage h1').html(data.Name);

            var editLink = $('#EditPracticeButton').attr('href') + data.id;

            $('#EditPracticeButton').attr('href', editLink);

            var view = this.view('//zoladex/views/practice_details/init.ejs', data);

            $('#PracticeDetailsList', this.element).append(view);

            $('#PracticeDetailsList').listview('refresh');

            $.mobile.hidePageLoadingMsg();
        },

        onDelete: function () {
            $.mobile.changePage("practicelist.htm");
        },

        '#DeletePracticeButton click': function (el) {
            // hack to maintain context in the on button click handler
            var self = this;
            $(el).simpledialog({
                'mode': 'bool',
                'prompt': 'Are you sure you want to do this?',
                'useModal': true,
                'buttons': {
                    'OK': {
                        click: function () {
                            Zoladex.Models.Practice.destroy($("#id").val()).done(self.onDelete);
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