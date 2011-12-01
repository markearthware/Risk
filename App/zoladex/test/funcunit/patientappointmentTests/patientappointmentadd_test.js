steal("funcunit", function () {
    module("Add new HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.calendarTab').exists().click();

                S('#ButtonNewAppointment').exists().click();

                S('#AddAppointmentPage').exists();
            });
        }
    });

    test("Add HCP page is shown", function () {

        equal(S('#AddAppointmentPage h1').text(), "New Appointment", "header text is New Appointment");
    });

    test("Add Appointment form has been inserted", function () {

        ok(S(S('#NewAppointmentForm').children()).size(function (size) {
            return size > 2;
        }));
    });

    test("Types list has been populated", function () {
        ok(S(S('#AppointmentTypeId').children()).size(function (size) {
            return size > 2;
        }));        

    });
})