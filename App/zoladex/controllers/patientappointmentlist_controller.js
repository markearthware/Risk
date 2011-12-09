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
            //sort by date
            var sortedResult = result.sort(this.sortByDate);

            $('#AppointmentsList').html($.View('//zoladex/views/patientappointment_list/init.ejs', sortedResult));
            $('#AppointmentsList').listview('refresh');
            // hide loading message
            $.mobile.hidePageLoadingMsg();
        },
        sortByDate: function (a, b) {
            return (parseInt(a.StartDate.getTime()) - parseInt(b.StartDate.getTime()));
        }
    });
});