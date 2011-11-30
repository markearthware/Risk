steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hcp.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpEdit', {
        },
    {
        init: function () {

            var view = $.View('//zoladex/views/hcp_addedit/init.ejs');

            $('#EditHcpForm').html(view);
        },
        submit: function (el, ev) {

            ev.preventDefault();

//            if ($('#NewHcpForm').valid()) {
//                steal.dev.log('insert hcp form is valid, attempting to save to database...');
//                new Zoladex.Models.Hcp(el.formParams()).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
//            }

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