steal("funcunit", function () {
    module("Practice item deleted", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();

                S('#PracticeList li :first a').exists().click();

                S('#PracticeDetailsPage').exists();
            });
        }
    });

    test("Item is deleted", function () {

        S('#PracticeDetailsList li').exists();

        S('#DeletePracticeButton').exists().click();

        S('#PracticeDeleteConfirmDialog').exists();

        S('#confirmYes').exists().click();

        ok(S('#PracticeListPage').exists());
    });
})