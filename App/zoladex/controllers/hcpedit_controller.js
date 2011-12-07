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
            
            var params = Zoladex.QSUtils.getParams();

            var deffered = Zoladex.Models.Hcp.findOne(params.id); 
            
            var editLink = $('#ButtonDeleteHcp').attr('href') + params.id;
            $('#ButtonDeleteHcp').attr('href', editLink);

            deffered.done(this.callback('insertData'));
        },

        onUpdateSuccess: function () {
            
            steal.dev.log('edit worked');
            $.mobile.changePage('hcpdetails.htm?id=' + this.currentId);
        },

        onUpdateFail: function () {
            
            steal.dev.log('edit no worked');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        insertData: function (data) {
            
            this.currentId = data.id;

            var view = $.View('//zoladex/views/hcp_addedit/init.ejs', data);

            var form = $('#EditHcpForm');

            form.html(view);

            form.trigger('create');

            $.mobile.hidePageLoadingMsg();
        }
    });
    });