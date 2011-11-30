steal("funcunit", function () {
    module("Edit a HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                S('#HcpListList li.ui-li').size(function (size) {
                    return size > 2;
                });

                S('.hcpAnchor').first().exists().click();

                S('#EditHcpButton').exists().click();

                S('#HcpEditPage').exists();
            });
        }
    });

    test("Edit HCP page is shown", function () {

        equal(S('#HcpEditPage h1').text(), "Edit HCP", "header text is Edit HCP");
    });

    test("Edit HCP form has been inserted", function () {

        ok(S(S('#EditHcpForm').children()).size(function (size) {
            return size > 2;
        }));
    });

    test("Can successfully edit a new HCP", function () {

//        S('#title').type("blah");
//        S('#firstname').type("blah");
//        S('#surname').type("blah");
//        S('#number').type("234234");
//        S('#street').type("blah");
//        S('#town').type("blah");
//        S('#practicename').type("blah");
//        S('#newhcpbutton').exists().click();
        ok(false, 'test not implemented'); 
    });
})