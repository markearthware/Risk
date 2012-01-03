steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_addedit/init.ejs',
    '../lib/livequery/jquery.livequery.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpEdit', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();

            $.validator.setDefaults({
                errorPlacement: function (error, element) {
                    $(element).attr({ "title": error.text() });
                },
                highlight: function (element) {
                    if ($(element).is('select')) {
                        element = $(element).parent().get(0);
                        $(element).removeClass("textinput");
                        $(element).addClass("errorHighlight");
                    }
                    else {
                        $(element).removeClass("textinput");
                        $(element).addClass("errorHighlight");
                    }

                },
                unhighlight: function (element) {

                    if ($(element).is('select')) {
                        element = $(element).parent().get(0);
                        $(element).removeClass("errorHighlight");
                        $(element).addClass("textinput");
                    }
                    else {
                        $(element).removeClass("errorHighlight");
                        $(element).addClass("textinput");
                    }
                }
            });

        },
        submit: function (el, ev) {

            ev.preventDefault();

            var params = el.formParams();

            var structure = { id: params.id, Title: params.Title, FirstName: params.FirstName, Surname: params.Surname, Telephone: params.Telephone, Email: params.Email, Street: params.Street, Town: params.Town, County: params.County, Postcode: params.Postcode, Notes: params.Notes };

            if ($('#EditHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');
                new Zoladex.Models.Hcp(structure).save(this.callback(this.onUpdateSuccess), this.callback('onUpdateFail'));
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
            var selectedpracticesdef = Zoladex.Models.Practice.findAll({ hcpid: params.id });
            var practicesdef = Zoladex.Models.Practice.findAll({ id: params.id });
            var self = this;

            $.when(hcpdef, selectedpracticesdef, practicesdef).done(function (hcpres, selectedpracticesres, practicesres) {

                var locsids = [];

                if (params.locid) {
                    locsids.push({ id: params.locid });
                }
                else {
                    locsids = selectedpracticesres;
                }

                var view = $.View('//zoladex/views/hcp_addedit/init.ejs', {
                    id: hcpres.id,
                    Title: hcpres.Title,
                    FirstName: hcpres.FirstName,
                    Surname: hcpres.Surname,
                    Telephone: hcpres.Telephone,
                    Email: hcpres.Email,
                    Street: hcpres.Street,
                    Town: hcpres.Town,
                    County: hcpres.County,
                    Postcode: hcpres.Postcode,
                    Notes: hcpres.Notes,
                    Locs: practicesres,
                    LocsId: locsids ? locsids : -1
                });

                var form = $('#EditHcpForm');

                form.html(view);

                form.trigger('create');

                $.mobile.hidePageLoadingMsg();
            });
        },

        '#PracticeName-button click': function () {
            $('.ui-selectmenu').livequery(function () {
                $('#AddButton').remove();
                $('.ui-header').append('<a href=' + baseurl + '/zoladex/pages/hcp/practicenew.htm?onsubmit=3&id=' + $('#id').val() + ' id="AddButton" class="ui-btn-right ui-btn ui-btn-icon-notext ui-btn-corner-all ui-shadow ui-btn-up-c" data-iconpos="notext" data-icon="plus" title="New Hospital/Practice" data-theme="c"><span class="ui-btn-inner ui-btn-corner-all" aria-hidden="true"><span class="ui-btn-text">New</span><span class="ui-icon ui-icon-plus ui-icon-shadow"></span></span></a>');
            });
        },

        addPractices: function (hcpId) {
            var form = $('form');
            var params = form.formParams();

            for (var i = 0; i < params.PracticeName.length; i++) {
                var structure = { HcpId: parseInt(hcpId), PracticeId: parseInt(params.PracticeName[i]) };
                if (i != params.PracticeName.length - 1) {
                    new Zoladex.Models.HcpPractice(structure).save();
                }
                else {
                    new Zoladex.Models.HcpPractice(structure).save(this.callback(this.onUpdateSuccess2));
                }
            }
        },

        onUpdateSuccess: function (obj) {
            var self = this;
            //destroy all HcpPractice records where HcpId = obj.id
            Zoladex.Models.HcpPractice.destroyByHcpId(obj.id).done(function () {
                self.addPractices(obj.id);
            });
        },

        onUpdateSuccess2: function () {
            steal.dev.log('edit worked');
            $.mobile.changePage('hcpdetails.htm?id=' + $('#id').val());
        },

        onUpdateFail: function () {

            steal.dev.log('edit no worked');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }

    });
});