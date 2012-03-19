steal("funcunit", function () {
    module("Symptom edit page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#progressrow').exists().click();

                S('#SymptomsList').exists().click();

                S('#SymptomListContainer a').exists().click();

                S('#SymptomEditPage').exists();

                S('#EditSymptomForm').exists();

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

    test("Can edit a symptom", function () {
        S('#SymptomId').exists(function () {
            S('#1').click();
            S('#Date').type("1");
            S("#dw_set").exists().click();
            S('#Time').type("1");
            S("#dw_set").exists().click();
            S('#submitsymptombutton').exists().click();
            S('#confirmNo').exists().click(); 
            ok(S("#SymptomsListPage").exists(), "appointment edited sucessfully");
        });

    });
})