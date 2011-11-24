steal("funcunit", function () {
    module("zoladex test", {
        setup: function () {
            S.open("//zoladex/index.html");
        }
    });

    test("IntroPageDoesLoad", function () {
        ok(S("#homePage h1").first().text('Header'), "header text correct");
    });
})