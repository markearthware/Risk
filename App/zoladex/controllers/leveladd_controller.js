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

            var dob;
            if (localStorage.dateOfBirth !== undefined) {

                dob = new Date(localStorage.dateOfBirth);
            }
            else {
                var averageCancerAge = new Date();
                averageCancerAge.setYear(1955);
                averageCancerAge.setMonth(0);
                averageCancerAge.setDate(1);
                dob = averageCancerAge;
            }

            var view = $.View("//zoladex/views/level_addedit/init.ejs",
                {
                    date: date,
                    dateOfBirth: dob
                }
            );

            $('#AddLevelForm').html(view);

            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });

            $("#Dob").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#AddLevelForm').valid()) {

                var formParams = el.formParams();

                if (formParams.birthdate !== "") {
                    localStorage.dateOfBirth = $.scroller.parseDate('dd M yy', formParams.Dob);
                }

                var params = { Date: formParams.date, PsaLevel: formParams.psacount };

                new Zoladex.Models.Psalevel(params).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }
            return false;
        },

        onInsertSuccess: function () {

            $.mobile.changePage('levels.htm', 'pop', false, true);
        },

        onInsertFail: function () {
            $.mobile.changePage('dialog/error.htm', 'pop', false, true);
        },

        calculateAge: function (birthDate) {

            if (birthDate === undefined || birthDate < 1) {
                birthDate = new Date(localStorage.dateOfBirth);
            }
            else {
                birthDate = new Date(birthDate);
            }

            return new Date().getFullYear() - birthDate.getFullYear();
        }
    });
});