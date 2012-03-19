steal("funcunit", function () {
    module("PSA Levels Page", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#progressrow').exists().click();

                S('#PsaLevels').exists().click();

                S('#LevelsListPage').exists();
            });
        }
    });

    test("PSA Levels header", function () {

        equal(S('#LevelsListPage h1').text(), "My PSA Levels", "header text is correct");
    });
})