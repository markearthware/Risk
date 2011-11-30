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
            $.mobile.showPageLoadingMsg();
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
        loadData: function () {
            var params = this.getQueryStringParams();

            var deffered = Zoladex.Models.Hcp.findOne(params.Id);

            deffered.done(this.callback('insertData'));
        },
        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1];

            return $.String.deparam(queryString);
        },

        insertData: function (data) {
            var item = data.item(0);
            $('#title').val(item.Title);
            $('#firstname').val(item.FirstName);
            $('#surname').val(item.Surname);
            $('#number').val(item.Telephone);
            $('#street').val(item.Street);
            $('#town').val(item.Town);
            $('#practicename').val(item.PracticeName);

            $.mobile.hidePageLoadingMsg();
        }
    });
    });