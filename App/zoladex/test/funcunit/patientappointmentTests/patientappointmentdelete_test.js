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

        S('#EditAppointmentForm input').exists();

        S('#DeleteAppointmentButton').exists().click();

        S('#AppointmentDeleteConfirmDialog').exists();

        S('#confirmYes').exists().click();

        ok(S('#calendarPage').exists());

    });
})