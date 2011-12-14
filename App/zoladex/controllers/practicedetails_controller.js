steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/practice_details/init.ejs'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeDetails', {
    },
    {
        postcode: null,

        init: function () {
            steal.dev.log("test1");
            $.mobile.showPageLoadingMsg();
        },

        loadData: function () {

            //get query string params
            var params = Zoladex.QSUtils.getParams();

            var deffered = Zoladex.Models.Practice.findOne(params.id);

            $.when(deffered).done(this.callback('insertData'));
        },

        insertData: function (data) {
            steal.dev.log("test2");
            this.postcode = data.Postcode;

            $('#PracticeDetailsPage h1').html(data.Name);

            var editLink = $('#EditPracticeButton').attr('href') + data.id;

            $('#EditPracticeButton').attr('href', editLink);

            var view = this.view('//zoladex/views/practice_details/init.ejs', data);

            $('#PracticeDetailsList', this.element).append(view);

            $('#PracticeDetailsList').listview('refresh');

            $('#DeletePracticeButton').attr("href", "dialog/practiceconfirmdialog.htm?id=" + data.id);
            steal.dev.log("test3");
            $.mobile.hidePageLoadingMsg();
        },

        '#AddressLink click': function () {
            var url = 'http://maps.google.com/maps?q=' + this.postcode + ', UK';
            window.location = url;
        }
    });
});