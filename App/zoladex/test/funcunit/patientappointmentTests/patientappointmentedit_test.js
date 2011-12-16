steal("funcunit", function () {
    module("Edit Appointment", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.calendarTab').exists().click();

                S('.app-link').exists().first().click();

                S('#EditAppointmentPage').exists().visible();
            });
        }
    });

    test("Appointment created successfully", function () {
        S("#TypeId").exists(function () {
            S("#TypeId")[0].options.selectedIndex = 3;
            S("#StartDate").type("1");
            S("#dw_set").exists().click();
            S("#StartTime").type("1");
            S("#dw_set").exists().click();
            S('#newappointmentbutton').exists().click();
            //check success prompt show
            ok(S("#calendarPage").exists(), "appointment edited sucessfully");
        });

    });

    test("Header text", function () {

        equal(S('#EditAppointmentPage h1').text(), "Edit Appointment", "header text is Edit Appointment");
    });

    test("Edit Appointment form has been inserted", function () {

        ok(S('#HcpId').exists(), "form field inserted");
    });

    test("Types list has been populated", function () {
        ok(S('#TypeId option').size(function (size) {
            return size > 2;
        }));

    });

    // careful as will only pass if HCP tests are run first to populate some data!
    test("HCPs list has been populated", function () {
        ok(S('#HcpId option').size(function (size) {
            return size > 2;
        }));

    });

    // careful as will only pass if Healthcare locations tests are run first to populate some data!
    test("Locations list has been populated", function () {
        ok(S('#HealthcareLocationId option').size(function (size) {
            return size > 2;
        }));

    });



})