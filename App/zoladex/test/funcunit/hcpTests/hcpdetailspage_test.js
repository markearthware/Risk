steal("funcunit", function () {
    module("Hcp list item clicked", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Hcps').exists().click();

                S('#HcpListPage').exists();

                S('#HcpListList li.ui-li').size(function(size) {
                    return size > 0;
                });

                S('#HcpListList li :first a').exists().click();

                S('#HcpDetailsPage').exists();
            });
        }
    });

    test("Details page is show", function () {

        equal(S('#HcpDetailsPage h1').text(), "Loading...", "header text is Dr Mark Short");

        ok(S('#HcpDetailsList li').size(function (size) {
            return size > 0;
        }), "Data has loaded");
    });
})