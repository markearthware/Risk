steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpEdit', {
        },
    {
        init: function () {
            
            $.mobile.showPageLoadingMsg();

        },
        submit: function (el, ev) {
            
            ev.preventDefault();

            if ($('#EditHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');
                new Zoladex.Models.Hcp(el.formParams()).save(this.callback(this.onUpdateSuccess), this.callback('onUpdateFail'));
            }

            return false;
        },

        loadData: function () {

            //get query string params
            var params = Zoladex.QSUtils.getParams();
            var practiceName = null;
            var practiceres = null;
            var hcpres = null;
            var hcpdef = Zoladex.Models.Hcp.findOne(params.id);

            $.when(hcpdef).done(function (hcpres) {

                var practicedef = Zoladex.Models.Practice.findOne(hcpres.PracticeName);
                var practicesdef = Zoladex.Models.Practice.findAll();
                $.when(practicedef, practicesdef).done(function (practiceres, practicesres) {
                    practiceName = practiceres.Name;

                    var view = $.View('//zoladex/views/hcp_addedit/init.ejs', {
                        id: hcpres.id,
                        Title: hcpres.Title,
                        FirstName: hcpres.FirstName,
                        Surname: hcpres.Surname,
                        PracticeName: practiceName,
                        Telephone: hcpres.Telephone,
                        Email: hcpres.Email,
                        Street: hcpres.Street,
                        Town: hcpres.Town,
                        County: hcpres.County,
                        Postcode: hcpres.Postcode,
                        Locs: practicesres,
                        LocsId: practiceres.id
                    });

                    var form = $('#EditHcpForm');

                    form.html(view);

                    form.trigger('create');

                    $.mobile.hidePageLoadingMsg();
                });
            });
        },

        onUpdateSuccess: function () {
            
            steal.dev.log('edit worked');
            $.mobile.changePage('hcpdetails.htm?id=' + $('#id').val());
        },

        '#PracticeName change': function () {
            if ($("#PracticeName option:selected").val() == 0) {
                var params = Zoladex.QSUtils.getParams();
                $.mobile.changePage('../hcp/practicenew.htm?onsubmit=3&' + 'id=' + params.id, 'flip', false, true);
            }
        },

        onUpdateFail: function () {
            
            steal.dev.log('edit no worked');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
        
    });
});