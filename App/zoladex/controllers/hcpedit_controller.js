﻿steal('jquery/controller',
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
            var params = this.getQueryStringParams();

            var deffered = Zoladex.Models.Hcp.findOne(params.Id); 
            
            var editLink = $('#ButtonDeleteHcp').attr('href') + params.Id;
            $('#ButtonDeleteHcp').attr('href', editLink);

            deffered.done(this.callback('insertData'));
        },

        onUpdateSuccess: function () {
            steal.dev.log('edit worked');
            $.mobile.changePage('hcpdetails.htm?Id=' + this.currentId);
        },

        onUpdateFail: function () {
            steal.dev.log('edit no worked');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        getQueryStringParams: function () {

            var queryString = window.location.href.split('?')[1];

            return $.String.deparam(queryString);
        },

        insertData: function (data) {

            this.currentId = data.Id;

            var view = $.View('//zoladex/views/hcp_addedit/init.ejs', data);

            var form = $('#EditHcpForm');

            form.html(view);

            form.trigger('create');

            $.mobile.hidePageLoadingMsg();
        }
    });
    });