steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js',
    '../models/psalevel.js',
    '../lib/mobiscroll/css/mobiscroll-1.5.2.css',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../views/level_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.LevelAdd', {
    },
    {
        averageCancerAge: null,

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

            var date = new Date();

            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';

            var view = $.View("//zoladex/views/level_addedit/init.ejs",
                {
                    date: date
                }
            );

            $('#AddLevelForm').html(view);

            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });

        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#AddLevelForm').valid()) {

                var formParams = el.formParams();

                var params = { Date: formParams.date, PsaLevel: formParams.PsaLevel };

                new Zoladex.Models.Psalevel(params).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }
            return false;
        },

        onInsertSuccess: function () {

            $.mobile.changePage('levelslist.htm', 'pop', false, true);
        },

        onInsertFail: function () {
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
});