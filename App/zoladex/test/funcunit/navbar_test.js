steal("funcunit", function () {
    module("zoladex test", {
        setup: function () {
            S.open("//zoladex/zoladex.html");
        }
    });

    test("Copy Test", function () {
        ok(S("h1").first().text('Header'), "header text correct");
    });
})