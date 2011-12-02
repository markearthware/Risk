steal("funcunit", function () {
    module("Symptom edit page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.progressTab').exists().click();

                S('#SymptomsList').exists().click();

                S('#SymptomListContainer a').exists().click();

                S('#SymptomEditPage').exists();
            });
        }
    });

    test("Symptom edit header", function () {

        equal(S('#SymptomEditPage h1').text(), "Edit Symptoms", "header is Symptom History");
    });

    test("Symptom Edit form has been inserted", function () {
        S('#EditSymptomForm').exists();
        ok(S('#Date').exists(), "form inserted");
    });

    test("Can successfully edit a symptom", function () {
        ok(false, 'this errors badly, todo urgently');
    });
})