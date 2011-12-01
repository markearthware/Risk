steal("funcunit", function () {
    module("Add new Appointment", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.calendarTab').exists().click();

                S('#ButtonNewAppointment').exists().click();

                S('#AddAppointmentPage').exists();
            });
        }
    });

    test("Form validation working", function () {
        S('#newaapointmentbutton').exists().click();
        // check validation prompts are shown
        ok(S('label.error').size(3), "all three fields failed validation");

    });

    test("Appointment created successfully", function () {
        S("#TypeId").exists(function () {
            S("#TypeId")[0].options.selectedIndex = 3;
            S("#StartDate").type("1");
            S("#dw_set").exists().click();
            S("#StartTime").type("1");
            S("#dw_set").exists().click();
            S('#newaapointmentbutton').exists().click();
            //check success prompt show
            ok(S("#SuccessDialog").exists(), "appointment created sucessfully");
        });

    });

    test("Add HCP page is shown", function () {

        equal(S('#AddAppointmentPage h1').text(), "New Appointment", "header text is New Appointment");
    });

    test("Add Appointment form has been inserted", function () {

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