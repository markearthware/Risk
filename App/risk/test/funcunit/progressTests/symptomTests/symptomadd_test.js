steal("funcunit", function () {
    module("Symptom add page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#progressrow').exists().click();

                S('#SymptomsList').exists().click();

                S('#ButtonNewSymptom').exists().click();

                S('#SymptomRecordPage').exists();
            });
        }
    });

    test("Symptom add header", function () {

        equal(S('#SymptomRecordPage h1').text(), "Record Symptoms", "header text is correct");
    });

    test("Symptom Add form has been inserted", function () {
        S('#RecordSymptomForm').exists();
        ok(S('#Date').exists(), "form inserted");
    });

    test("Can successfully add a new Symptom", function () {

        S('#SymptomId').exists(function() {
            S('#1').click();
            S("#Date").exists().type("1");
            S("#dw_set").exists().click();
            S("#Time").type("1");
            S("#dw_set").exists().click();
            S('#submitsymptombutton').exists().click();
            S('#confirmNo').exists().click();
            S('#confirmNo').exists().click(); // twice as it seems to re-open when done really fast in test
            ok(S('#SymptomsListPage').exists());
        });
    });
})