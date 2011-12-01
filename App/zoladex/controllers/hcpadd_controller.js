steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpAdd', {
    },
    {
        init: function () {

            var view = $.View('//zoladex/views/hcp_addedit/init.ejs', { Id: "",
                Title: "",
                FirstName: "",
                Surname: "",
                PracticeName: "",
                Number: "",
                Email: "",
                Street: "",
                Town: "",
                County: "",
                Postcode: ""
            });

            $('#NewHcpForm').html(view);
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#NewHcpForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');

                var params = el.formParams();

                var hcpDataStructure = { title: params.Title, firstname: params.FirstName, surname: params.Surname, practicename: params.PracticeName, tel: params.Telephone, email: params.Email, street: params.Street, town: params.Town, county: params.County, postcode: params.Postcode };

                new Zoladex.Models.Hcp(hcpDataStructure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },
        onInsertSuccess: function () {
            $.mobile.changePage('dialog/success.htm', 'pop', false, true);
        },
        onInsertFail: function () {
            steal.dev.log('professional has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});