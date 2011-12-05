steal("funcunit", function () {
    module("Delete an Appointment", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.calendarTab').exists().click();

                S('.app-link').exists().first().click();

                S('#EditAppointmentPage').exists().visible();
            });
        }
    });

    test("Appointment deleted successfully", function () {

        S('#DeleteAppointmentButton').exists().click();

        S('.ui-simpledialog-container').exists().visible();

        S('.ui-simpledialog-controls a').first().click();

        ok(S('#calendarPage').exists());

    });
})