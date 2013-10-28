steal("funcunit", function () {
    module("Symptom list page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#progressrow').exists().click();

                S('#SymptomsList').exists().click();

                S('#SymptomsListPage').exists();
            });
        }
    });

    test("Symptom list header header", function () {

        equal(S('#SymptomsListPage h1').text(), "My Symptoms", "header is Symptom History");
    });
})