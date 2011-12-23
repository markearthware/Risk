steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../models/hcppractice.js',
    '../lib/WebSQL/db.js',
    '../views/hcp_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpAdd', {
    },
    {
        init: function () {

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

        loadData: function () {
            var locsdef = Zoladex.Models.Practice.findAll();
            var params = Zoladex.QSUtils.getParams();
            $.when(locsdef).done(function (locsres) {
                // process view
                var locsid = [];

                if (params.locid) {
                    locsid.push({ id: params.locid });
                }
                else {
                    locsid = -1;
                }

                var view = $.View('//zoladex/views/hcp_addedit/init.ejs', { id: "",
                    Title: "",
                    FirstName: "",
                    Surname: "",
                    PracticeName: "",
                    Number: "",
                    Email: "",
                    Street: "",
                    Town: "",
                    County: "",
                    Postcode: "",
                    Notes: "",
                    Locs: locsres,
                    LocsId: locsid
                });
                
                $('#NewHcpForm').html(view).trigger('create');
            });
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');

                var params = el.formParams();

                var hcpDataStructure = { Title: params.Title, FirstName: params.FirstName, Surname: params.Surname, Telephone: params.Telephone, Email: params.Email, Street: params.Street, Town: params.Town, County: params.County, Postcode: params.Postcode, Notes: params.Notes };

                new Zoladex.Models.Hcp(hcpDataStructure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));

            }
            return false;
        },

        addPractices: function (hcpId) {
            var form = $('form');
            var params = form.formParams();

            for (var i = 0; i < params.PracticeName.length; i++) {
                var structure = { HcpId: parseInt(hcpId), PracticeId: parseInt(params.PracticeName[i]) };
                new Zoladex.Models.HcpPractice(structure).save();
            }
        },

        onInsertSuccess: function (obj, newid) {

            this.addPractices(newid);

            var params = Zoladex.QSUtils.getParams();

            if (params.onsubmit) {

                if (params.onsubmit == 0) {
                    //go back to add new appointment
                    $.mobile.changePage('../calendar/patientappointmentnew.htm?hcpid=' + newid, 'flip', false, true);
                }
                else if (params.onsubmit == 1) {
                    //go back to edit appointment
                    $.mobile.changePage('../calendar/patientappointmentedit.htm?hcpid=' + newid + '&id=' + params.id, 'flip', false, true);
                }
            }
            else { //standard procedure
                $.mobile.changePage('hcplist.htm', 'pop', false, true);
            }
        },
        '#PracticeNew click': function (e, a) {
            $.mobile.changePage(baseurl + '/zoladex/pages/hcp/practicenew.htm?onsubmit=2', 'flip', false, true);
        },
        onInsertFail: function () {

            steal.dev.log('professional has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});