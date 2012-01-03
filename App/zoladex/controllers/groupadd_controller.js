steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/group.js',
    '../lib/WebSQL/db.js',
    '../views/group_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.GroupAdd', {
    },
    {
        init: function () {

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
            
            var view = $.View('//zoladex/views/group_addedit/init.ejs', { id: "",
                Name: ""
            });

            $('#NewGroupForm').html(view);
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#NewGroupForm').valid()) {
                steal.dev.log('insert practice form is valid, attempting to save to database...');

                var params = el.formParams();

                var structure = { Name: params.Name };

                new Zoladex.Models.Group(structure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }

            return false;
        },
        onInsertSuccess: function (obj,newid) {
            $.mobile.changePage('grouplist.htm', 'pop', false, true);
        },
        onInsertFail: function () {
            steal.dev.log('group has not been added');
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});