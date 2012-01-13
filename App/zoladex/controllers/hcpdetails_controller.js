steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp2.js',
    '../models/practice.js',
    '../models/jobrole.js',
    '../lib/WebSQL/db.js',
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

            var practiceName = null;
            var practiceres = null;
            var hcpres = null;
            var hcpdef = Zoladex.Models.Hcp2.findOne(params.id);
            var self = this;

            $.when(hcpdef).done(function (hcpres) {

                $('#HcpDetailsPage h1').html(hcpres.FullName());

                var editLink = $('#EditHcpButton').attr('href') + hcpres.id;

                $('#EditHcpButton').attr('href', editLink);

                var view = $.View('//zoladex/views/hcp_details/init.ejs', {
                    id: hcpres.id,
                    Title: hcpres.Title,
                    FirstName: hcpres.FirstName,
                    Surname: hcpres.Surname,
                    Telephone: hcpres.Telephone,
                    Email: hcpres.Email,
                    JobRole: hcpres.Name,
                    Notes: hcpres.Notes,
                    PrimaryPracticeId : hcpres.PrimaryPracticeId,
                    PrimaryPracticeName: hcpres.PrimaryPracticeName,
                    PrimaryPracticePostcode: hcpres.PrimaryPracticePostcode,
                    SecondaryPracticeId : hcpres.SecondaryPracticeId,
                    SecondaryPracticeName: hcpres.SecondaryPracticeName,
                    SecondaryPracticePostcode: hcpres.SecondaryPracticePostcode
                });

                steal.dev.log("hcpres: ");
                steal.dev.log(hcpres);

                $('#HcpDetailsList', this.element).append(view);

                $('#HcpDetailsList').listview('refresh');

                $('#DeleteHcpButton').attr("href", "dialog/hcpconfirmdialog.htm?id=" + params.id);

                $.mobile.hidePageLoadingMsg();
            });
        }
    });
});