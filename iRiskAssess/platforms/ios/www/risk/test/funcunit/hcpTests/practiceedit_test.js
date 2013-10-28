steal("funcunit", function () {
    module("Edit a Practice", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();

                S('#PracticeList li.ui-li').size(function (size) {
                    return size > 0;
                });

                S('.practiceAnchor').first().exists().click();

                // check details page has actually loaded the data
                S('#PracticeDetailsList li').size(function (size) {
                    return size > 0;
                });

                S('#EditPracticeButton').exists().click();

                S('#PracticeEditPage').exists();
            });
        }
    });

    test("Edit Practice form has been inserted", function () {
        S('#EditPracticeForm').exists();
        ok(S('#name').exists(), "name field loaded");
    });

    test("Can successfully edit a Practice/Hospital", function () {
        S('#name').exists().type("\b\b\b\b\b\b\b\b\b\b\b" + "A Hospital");
        S('#newpracticebutton').exists().click();
        S('#PracticeDetailsPage').exists();
        ok(S('#PracticeDetailsPage h1').text("A Hospital"));
    });
})