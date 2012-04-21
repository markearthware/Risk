steal("funcunit", function () {
    module("PSA Add Levels Page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#progressrow').exists().click();

                S('#PsaLevels').exists().click();

                S('#ButtonNewLevel').exists().click();

                S('#AddLevelForm').exists();
            });
        }
    });

    test("ButtonNewLevel", function () {
        equal(S('#AddLevelsPage h1').text(), "Record PSA Level", "header text is correct");
    });
    
    test("Form inserted", function () {
        ok(S('#Date').exists(), "form inserted");     
    });
})