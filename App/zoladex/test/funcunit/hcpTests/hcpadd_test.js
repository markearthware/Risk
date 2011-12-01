steal("funcunit", function () {
    module("Add new HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                S('#HcpListList li.ui-li').size(function (size) {
                    return size > 0;
                });

                S('#ButtonNewHcp').exists().click();

                S('#AddHcpPage').exists();
            });
        }
    });

    test("Add HCP page is shown", function () {

        equal(S('#AddHcpPage h1').text(), "New HCP", "header text is New HCP");
    });

    test("Add HCP form has been inserted", function () {

        ok(S(S('#NewHcpForm').children()).size(function (size) {
            return size > 2;
        }));
    });

    test("Can successfully add a new HCP", function () {

        S('#postcode').type("blah");
        S('#county').type("blah");
        S('#email').type("blah");
        S('#title').type("blah");
        S('#firstname').type("blah");
        S('#surname').type("blah");
        S('#number').type("234234");
        S('#street').type("blah");
        S('#town').type("blah");
        S('#practicename').type("blah");
        S('#newhcpbutton').exists().click();
        ok(S('#SuccessDialog').exists());
    });
})