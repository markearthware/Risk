steal("funcunit", function () {
    module("Add new HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                //                S('#HcpListList li.ui-li').size(function (size) {
                //                    return size > 0;
                //                });

                S('#ButtonNewHcp').exists().click();

                S('#AddHcpPage').exists();
            });
        }
    });

    test("Add HCP page is shown", function () {

        equal(S('#AddHcpPage h1').text(), "New HCP", "header text is New HCP");
    });

    test("Add HCP form has been inserted", function () {

        //        ok(S(S('#NewHcpForm').children()).size(function (size) {
        //            return size > 2;
        //        }));

        ok(S('#Postcode').exists(), "form element exists");
    });

    test("Can successfully add a new HCP", function () {

        S('#Postcode').type("blah");
        S('#County').type("blah");
        S('#Email').type("blah");
        S('#Title').type("blah");
        S('#FirstName').type("blah");
        S('#Surname').type("blah");
        S('#Telephone').type("234234");
        S('#Street').type("blah");
        S('#Town').type("blah");
        S('#PracticeName').type("blah");
        S('#newhcpbutton').exists().click();
        ok(S('#HcpListPage').exists());
    });
})