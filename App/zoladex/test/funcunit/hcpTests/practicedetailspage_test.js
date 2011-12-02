steal("funcunit", function () {
    module("Practice list item clicked", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('.hcpTab').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();

                S('#PracticeListList li.ui-li').size(function(size) {
                    return size > 0;
                });

                S('#PracticeListList li :first a').exists().click();

                S('#PracticeDetailsPage').exists();
            });
        }
    });

    test("Details page is shown", function () {

        equal(S('#PracticeDetailsPage h1').text(), "Loading...", "header text is ......");

        ok(S('#PracticeDetailsList li').size(function (size) {
            return size > 0;
        }), "Data has loaded");
    });
})