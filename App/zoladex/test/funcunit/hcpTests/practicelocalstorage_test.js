steal("funcunit", function () {
    module("Practice/Hospital Local Storage loads data", {
        setup: function () {

            S.open("../index.html", function() {
                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();
            });
        }
    });

    test("Check dummy record from DB is A Hospital", function () {
        ok(S('#PracticeListList li').size(function (size) {
            return size > 0;
        }), "at least one record in list");
        ok(S('#PracticeListList a').first().text("A Hospital"), "Dummy record from DB is A Hospital");
    });
})