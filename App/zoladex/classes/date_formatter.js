steal('jquery/class', function () {

    $.Class('Zoladex.DateFormatter',
    {
        getShortDateFormat: function (dt) {
            var t = new Date(dt);
            return Zoladex.DateFormatter.getWeekDayName(t.getDay()) + " " + t.getDate() + " " + Zoladex.DateFormatter.getMonthName(t.getMonth());
        },
        getWeekDayName: function (num) {
            return ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"][num];
        },
        getMonthName: function (num) {
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][num];
        }

    },
    {


    });
})