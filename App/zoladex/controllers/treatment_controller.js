steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/mobiscroll/css/mobiscroll-1.5.2.css',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../views/treatment/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.Treatment', {
        },
    {
        init: function () {

            var date = new Date();

            if (localStorage.treatmentDate) {
                date = new Date(localStorage.treatmentDate);
            }

            var pickertheme = navigator.userAgent.indexOf('Android') > 0 ? 'android' : 'ios';

            var view = $.View("//zoladex/views/treatment/init.ejs",
                {
                    date: date
                }
            );

            $('#TreatmentForm').html(view);

            $("#Date").scroller({ theme: pickertheme, dateFormat: 'dd M yy', dateOrder: 'ddMMyy' });

        },

        submit: function (el, ev) {

            ev.preventDefault();

            var formParams = el.formParams();

            //localstorage save - would only be one record in db so no point having a table.
            localStorage.treatmentNhsNumber = formParams.nhsnumber;
            localStorage.treatmentHospitalNumber = formParams.hospitalnumber;
            localStorage.treatmentPsaLevel = formParams.PsaLevel;
            localStorage.treatmentBiopsy = formParams.biopsy;
            localStorage.treatmentCores = formParams.cores;
            localStorage.treatmentGleason = formParams.gleason;
            localStorage.treatmentTStage = formParams.tstage;
            localStorage.treatmentTreatment = formParams.treatment;
            localStorage.treatmentDate = $.scroller.parseDate('dd M yy', formParams.date);

            $.mobile.changePage('../progress.htm', 'flip', false, true);

            return false;
        }
    });
    });