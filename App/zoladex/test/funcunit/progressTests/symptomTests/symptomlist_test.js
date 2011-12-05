﻿steal("funcunit", function () {
    module("Symptom list page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.progressTab').exists().click();

                S('#SymptomsList').exists().click();

                S('#SymptomsListPage').exists();
            });
        }
    });

    test("Symptom list header header", function () {

        equal(S('#SymptomsListPage h1').text(), "Symptom History", "header is Symptom History");
    });

    test("Contact HCP button clicked", function () {

        S('#ContactHcpButton').exists().click();

        ok(S('#HcpListPage').exists(), 'have moved to HCP page');
    });
})