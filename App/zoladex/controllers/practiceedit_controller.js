steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/practice_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeEdit', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

            $.validator.setDefaults({
                errorPlacement: function (error, element) {
                    $(element).attr({ "title": error.text() });
                },
                highlight: function (element) {

                    $(element).removeClass("textinput");
                    $(element).addClass("errorHighlight");
                },
                unhighlight: function (element) {

                    $(element).removeClass("errorHighlight");
                    $(element).addClass("textinput");
                }
            });
            
        },
        submit: function (el, ev) {
            
            ev.preventDefault();

            if ($('#EditPracticeForm').valid()) {
                steal.dev.log('insert practice form is valid, attempting to save to database...');
                new Zoladex.Models.Practice(el.formParams()).save(this.callback(this.onUpdateSuccess), this.callback('onUpdateFail'));
            }

            return false;
        },

        loadData: function () {
            var params = Zoladex.QSUtils.getParams();

            var deffered = Zoladex.Models.Practice.findOne(params.id); 
            
            var editLink = $('#ButtonDeletePractice').attr('href') + params.id;
            $('#ButtonDeletePractice').attr('href', editLink);

            deffered.done(this.callback('insertData'));
        },

        onUpdateSuccess: function () {
            steal.dev.log('edit worked');
            $.mobile.changePage('practicedetails.htm?id=' + this.currentId);
        },

        onUpdateFail: function () {
            steal.dev.log('edit no worked');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
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