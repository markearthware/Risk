steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/appointmentlistitem.js',
    '../models/hcp.js',
    '../views/patientappointment_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PatientAppointmentList', {
    },
    {
        init: function () {
            // show loading screen
            $.mobile.showPageLoadingMsg();
            Zoladex.Models.AppointmentListItem.findAll().done(this.callback('onDataLoaded'));
        },
        onDataLoaded: function (result) {
            // sort by date
            $('#AppointmentsList').html($.View('//zoladex/views/patientappointment_list/init.ejs', result));
            $('#AppointmentsList').listview('refresh');
            // hide loading message
            $.mobile.hidePageLoadingMsg();
        }
    });
});