﻿steal("funcunit", function () {
    module("Hcp item deleted", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                S('#HcpListList li :first a').exists().click();

                S('#HcpDetailsPage').exists();
            });
        }
    });

    test("Item is deleted", function () {

        S('#DeleteHcpButton').exists().click();

        S('.ui-simpledialog-container').exists();

        S('.ui-simpledialog-controls a').first().click();

        ok(S('#HcpListPage').exists());
    });
})