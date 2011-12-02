steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeEdit', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

        },
        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#EditPracticeForm').valid()) {
                steal.dev.log('insert hcp form is valid, attempting to save to database...');
                new Zoladex.Models.Practice(el.formParams()).save(this.callback(this.onUpdateSuccess), this.callback('onUpdateFail'));
            }

            return false;
        },

        loadData: function () {
            var params = this.getQueryStringParams();

            var deffered = Zoladex.Models.Practice.findOne(params.id); 
            
            var editLink = $('#ButtonDeletePractice').attr('href') + params.id;
            $('#ButtonDeletePractice').attr('href', editLink);

            deffered.done(this.callback('insertData'));
        },

        onUpdateSuccess: function () {
            steal.dev.log('edit worked');
            $.mobile.changePage('practicedetails.htm?Id=' + this.currentId);
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

            this.currentId = data.id;

            var view = $.View('//zoladex/views/practice_addedit/init.ejs', data);

            var form = $('#EditPracticeForm');

            form.html(view);

            form.trigger('create');

            $.mobile.hidePageLoadingMsg();
        }
    });
    });