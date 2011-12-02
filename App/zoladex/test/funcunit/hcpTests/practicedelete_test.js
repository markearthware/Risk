steal("funcunit", function () {
    module("Practice item deleted", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();

                S('#PracticeListList li :first a').exists().click();

                S('#PracticeDetailsPage').exists();
            });
        }
    });

    test("Item is deleted", function () {

        S('#DeletePracticeButton').exists().click();

        S('.ui-simpledialog-container').exists(); //confirm dialog shows

        S('.ui-simpledialog-controls a').first().click(); //click OK

        ok(S('#PracticeListPage').exists());
    });
})