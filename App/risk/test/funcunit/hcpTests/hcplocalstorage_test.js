steal("funcunit", function () {
    module("Healthcare Professionals Local Storage loads data", {
        setup: function () {

            S.open("../index.html", function() {
                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();
            });
        }
    });

    test("Check dummy record from DB is Dr Mark Short", function () {
        ok(S('#HcpList li').size(function (size) {
            return size > 0;
        }), "at least one record in list");
        ok(S('#HcpList a').first().text("Dr Jim Bob"), "Dummy record from DB is Dr Jim Bob");
    });
})