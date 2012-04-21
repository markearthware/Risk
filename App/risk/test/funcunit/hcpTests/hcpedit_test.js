steal("funcunit", function () {
    module("Edit a HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();


                S('.hcpAnchor').first().exists().click();

                // check details page has actually loaded the data
                S('#HcpDetailsList li').size(function (size) {
                    return size > 0;
                });

                S('#EditHcpButton').exists().click();

                S('#HcpEditPage').exists();
            });
        }
    });

    test("Edit HCP page is shown", function () {

        equal(S('#HcpEditPage h1').text(), "Edit HCP", "header text is Edit HCP");
    });

    test("Edit HCP form has been inserted", function () {

        ok(S('#Title').exists(), "title loaded");
    });

    test("Can successfully edit a new HCP", function () {
        S('#Title option[value="Dr"]').click();
        S('#Title').click();
        S('#JobRole option[value="1"]').click();
        S('#JobRole').click();
        S('#Email').type("[ctrl]a[ctrl-up]\bblah@gmail.com");
        S('#Title').type("[ctrl]a[ctrl-up]\bblah");
        S('#FirstName').type("[ctrl]a[ctrl-up]\Jim");
        S('#Surname').type("[ctrl]a[ctrl-up]\Bob");
        S('#Telephone').type("[ctrl]a[ctrl-up]\b234234");
        S('#Notes').type("[ctrl]a[ctrl-up]\bblah");
        S('#newhcpbutton').exists().click();
        S('#HcpDetailsPage').exists();
        ok(S('#HcpDetailsPage h1').text("Dr Jim Bob"));
    });
})