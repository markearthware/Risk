steal('jquery/class', function () {

    $.Class('Zoladex.DateFormatter',
    {
        getShortDateFormat: function (dt) {
            dt = Date.parse(dt);
            return Zoladex.DateFormatter.getWeekDayName(dt.getDay()) + " " + dt.getDate() + " " + Zoladex.DateFormatter.getMonthName(dt.getMonth());
        },
        getWeekDayName: function (num) {
            return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][num];
        },
        getMonthName: function (num) {
            return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][num];
        }

    },
    {


    });
})