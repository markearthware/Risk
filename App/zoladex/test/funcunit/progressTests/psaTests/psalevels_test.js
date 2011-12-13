steal("funcunit", function () {
    module("PSA Levels Page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.progressTab').exists().click();

                S('#PsaLevels').exists().click();

                S('#LevelsPage').exists();
            });
        }
    });

    test("PSA Levels header", function () {

        equal(S('#LevelsPage h1').text(), "PSA Levels", "header text is correct");
    });
})