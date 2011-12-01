steal("funcunit", function () {
    module("Edit a HCP", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                S('#HcpListList li.ui-li').size(function (size) {
                    return size > 0;
                });

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
        S('#EditHcpForm').exists();
        ok(S('#title').exists(), "title loaded");
    });

    test("Can successfully edit a new HCP", function () {
        S('#title').exists().type("\b\b\b\b\b\b" + "Dr");
        S('#firstname').exists().type("\b\b\b\b\b\b\b\b\b\b\b\b" + "Jim");
        S('#surname').exists().type("\b\b\b\b\b\b\b\b\b\b\b\b\b" + "Bob");
        S('#email').exists().type("Dr");
        S('#county').exists().type("Jim");
        S('#postcode').exists().type("Bob");
        S('#newhcpbutton').exists().click();
        S('#HcpDetailsPage').exists();
        ok(S('#HcpDetailsPage h1').text("Dr Jim Bob"));
    });
})