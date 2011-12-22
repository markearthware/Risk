steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_details/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpDetails', {
    },
    {
        postcode: null,

        init: function () {

            $.mobile.showPageLoadingMsg();
        },

        getCommaSeparatedString: function (list) {
            if (list.length == 0) {
                return '';
            }

            var str = list[0].Name;

            for (var i = 1; i < list.length; i++) {
                str += ", " + list[i].Name;
            }

            return str;
        },

        loadData: function () {

            //get query string params
            var params = Zoladex.QSUtils.getParams();

            var practiceName = null;
            var practiceres = null;
            var hcpres = null;
            var hcpdef = Zoladex.Models.Hcp.findOne(params.id);
            var practicesdef = Zoladex.Models.Practice.findAll({ hcpid: params.id });
            var self = this;

            $.when(hcpdef, practicesdef).done(function (hcpres, practicesres) {

                $('#HcpDetailsPage h1').html(hcpres.FullName());

                var editLink = $('#EditHcpButton').attr('href') + hcpres.id;

                $('#EditHcpButton').attr('href', editLink);

                self.postcode = hcpres.Postcode;

                var view = $.View('//zoladex/views/hcp_details/init.ejs', {
                    id: hcpres.id,
                    Title: hcpres.Title,
                    FirstName: hcpres.FirstName,
                    Surname: hcpres.Surname,
                    PracticeName: self.getCommaSeparatedString(practicesres) ? self.getCommaSeparatedString(practicesres) : 'None',
                    Telephone: hcpres.Telephone,
                    Email: hcpres.Email,
                    Street: hcpres.Street,
                    Town: hcpres.Town,
                    County: hcpres.County,
                    Postcode: hcpres.Postcode,
                    Notes: hcpres.Notes
                });

                //$('#HcpDetailsList', this.element).append(view);

                $('#HcpDetailsList').html(view).trigger('create');

                $('#HcpDetailsList').listview('refresh');

                $('#DeleteHcpButton').attr("href", "dialog/hcpconfirmdialog.htm?id=" + params.id);

                $.mobile.hidePageLoadingMsg();
            });
        },
        '#AddressLink click': function () {
            var url = 'http://maps.google.com/maps?q=' + this.postcode + ', UK';

            window.location = url;
        }
    });
});