steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../views/treatment_details/init.ejs',
    '../views/treatment_details_none/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.TreatmentDetails', {
        },
    {

        init: function () {

            $.mobile.showPageLoadingMsg();

            var date2 = new Date();

            if (localStorage.treatmentDate) {
                date2 = new Date(localStorage.treatmentDate);
            }

            var view;

            if (localStorage.treatmentNhsNumber || localStorage.treatmentHospitalNumber || localStorage.treatmentPsaLevel || localStorage.treatmentBiopsy || localStorage.treatmentCores || localStorage.treatmentGleason || localStorage.treatmentTStage || localStorage.treatmentTreatment || localStorage.treatmentDate) {

                view = $.View('//zoladex/views/treatment_details/init.ejs', {
                    date: (date2.getDate() + "-" + (parseInt(date2.getMonth()) + 1) + "-" + date2.getFullYear())
                });

                $('#TreatmentHistoryBtn').text("Edit Treatment History");
            }
            else {
                view = $.View('//zoladex/views/treatment_details_none/init.ejs');
            }

            $('#TreatmentHistoryContent').html(view);

            $.mobile.hidePageLoadingMsg();
        }
    });
    });