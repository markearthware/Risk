﻿steal("funcunit", function () {
    module("Healthcare Professionals button clicked", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();
            });
        }
    });

    test("List of HCPs header", function () {

        equal(S('#HcpListPage h1').text(), "HCPs", "header text is HCP's");
    });
})