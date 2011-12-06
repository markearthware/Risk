steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/practice.js',
    '../lib/WebSQL/db.js',
    '../views/practice_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeAdd', {
    },
    {
        init: function () {

            var view = $.View('//zoladex/views/practice_addedit/init.ejs', { id: "",
                Name: ""
            });

            $('#NewPracticeForm').html(view);
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#NewPracticeForm').valid()) {
                steal.dev.log('insert practice form is valid, attempting to save to database...');

                var params = el.formParams();

                var practiceDataStructure = { Name: params.Name };

                new Zoladex.Models.Practice(practiceDataStructure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },
        onInsertSuccess: function () {
            $.mobile.changePage('practicelist.htm', 'pop', false, true);
        },
        onInsertFail: function () {
            steal.dev.log('practice has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});