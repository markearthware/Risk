steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hows.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.AddHow', {
        },
    {
        init: function () {
        },

        '.ok click': function (el) {

            if ($('#Name').val().length < 1) {
                $('.ui-dialog').dialog('close');
                return;
            }
            var structure = { Name: $('#Name').val(), HazardId: parseInt(localStorage.hazardId) };
            new Risk.Models.Hows(structure).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
        },
        '.cancel click': function (el) {
            $('.ui-dialog').dialog('close');
        },
        onInsertSuccess: function (obj, howId) {
            localStorage.tempHowId = howId;
            $.mobile.changePage('../whos.htm', 'flip', false, true);
        },
        onInsertFail: function () {
            //todo
        }
    });
    });