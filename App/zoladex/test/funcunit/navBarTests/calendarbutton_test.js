steal("funcunit", function () {
    module("Calendar Tab button clicked", {
        setup: function () {

            S.open("../index.html");

            S('#btnContinue').click();

            S('#appointmentsrow').exists().click();

            S('#calendarPage').exists();
        }
    });

    test("Calendar page header", function () {

        equal(S('#calendarPage h1').text(), 'My Appointments', "header text is Appointments");
    });

    test("current nav bar selected", function () {
        ok(S('.calendarTab').hasClass('ui-btn-active'), 'calendar tab button is selected');
    });
})