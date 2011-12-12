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

            $('#AddLevelForm').html(this.view("level_addedit/init"));

            if (localStorage.dateOfBirth !== undefined) {

                $("#Age").val(this.calculateAge);
            }

            $("#Age").change(this.callback('onBirthDateChange'));

            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';

            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });

            $("#Age").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });
        },
        
        onBirthDateChange: function () {
            // stash the value in hidden field
            $("#BirthDate").val($("#Age").val());

            //change the (visible) age field to show the age rather than the date
            $("#Age").val(this.calculateAge($("#Age").val()));
        },
        
        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#AddLevelForm').valid()) {

                var formParams = el.formParams();

                localStorage.dateOfBirth = $.scroller.parseDate('dd M yy', formParams.birthdate);

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