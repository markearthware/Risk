steal("funcunit", function () {
    module("HCP Tab button clicked", {
        setup: function () {

            S.open("../index.html");

            S('#btnContinue').click();

            S('#homePage').exists();

            S('.hcpTab').click();

            S('#hcpPage').exists();
        }
    });

    test("HCP page header", function () {

        equal(S('#hcpPage h1').text(), 'My HCP', "header text is My HCP");
    });

    test("current nav bar selected", function () {
        ok(S('.hcpTab').hasClass('ui-btn-active'), 'hcp tab button is selected');
    });
})