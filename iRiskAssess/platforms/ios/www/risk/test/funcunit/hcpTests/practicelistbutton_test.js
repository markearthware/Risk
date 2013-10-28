steal("funcunit", function () {
    module("Practice/Hospital button clicked", {
        setup: function () {

            S.open("../index.html", function () {
                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();
            });
        }
    });

    test("List of Practices header", function () {

        equal(S('#PracticeListPage h1').text(), "Hospitals/GP Surgeries", "Title is Hospitals/Practices");
    });
})