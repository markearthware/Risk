steal("funcunit", function () {
    module("Progress Tab button clicked", {
        setup: function () {

            S.open("../index.html");

            S('#btnContinue').click();

            S('.progressTab').exists().click();

            S('#progressPage').exists();
        }
    });

    test("Progress page header", function () {

        equal(S('#progressPage h1').text(), 'My Progress', "header text is My Progress");
    });

    test("current nav bar selected", function () {
        ok(S('.progressTab').hasClass('ui-btn-active'), 'progress tab button is selected');
    });
})