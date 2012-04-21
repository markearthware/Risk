steal("funcunit", function () {
    module("Support Tab button clicked", {
        setup: function () {

            S.open("../index.html");

            S('#btnContinue').click();

            S('#supportrow').exists().click();

            S('#supportPage').exists();
        }
    });

    test("Support page header", function () {

        equal(S('#supportPage h1').text(), 'Support', "header text is Support");
    });

    test("current nav bar selected", function () {
        ok(S('.supportTab').hasClass('ui-btn-active'), 'Support tab button is selected');
    });
})