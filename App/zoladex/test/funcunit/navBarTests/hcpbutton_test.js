steal("funcunit", function () {
    module("HCP Tab button clicked", {
        setup: function () {

            S.open("../index.html");

            S('#btnContinue').click();

            S('.hcpTab').exists().click();

            S('#HcpPage').exists();
        }
    });

    test("HCP page header", function () {

        equal(S('#HcpPage h1').text(), 'My HCP', "header text is My HCP");
    });

    test("current nav bar selected", function () {
        ok(S('.hcpTab').hasClass('ui-btn-active'), 'hcp tab button is selected');
    });
})