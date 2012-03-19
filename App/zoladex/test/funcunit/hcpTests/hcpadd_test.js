steal("funcunit", function () {
    module("Add new HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                S('#ButtonNewHcp').exists().click();

                S('#AddHcpPage').exists();
            });
        }
    });

    test("Add HCP page is shown", function () {

        equal(S('#AddHcpPage h1').text(), "New HCP", "header text is New HCP");
    });

    test("Add HCP form has been inserted", function () {

        ok(S('#Telephone').exists(), "form element exists");
    });

    test("Can successfully add a new HCP", function () {
        S('#Title option[value="Dr"]').click();
        S('#Title').click();
        S('#JobRole option[value="1"]').click();
        S('#JobRole').click();
        S('#Email').type("blah@gmail.com");
        S('#Title').type("blah");
        S('#FirstName').type("blah");
        S('#Surname').type("blah");
        S('#Telephone').type("234234");
        S('#Notes').type("blah");

        S('#newhcpbutton').exists().click();
        ok(S('#HcpListPage').exists());
    });
})