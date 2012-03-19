steal("funcunit", function () {
    module("Add new Practice", {
        setup: function () {

            S.open("../index.html", function () {

                S('#btnContinue').exists().click();

                S('#hcprow').exists().click();

                S('#Practices').exists().click();

                S('#PracticeListPage').exists();

//                S('#PracticeListList li.ui-li').size(function (size) {
//                    return size > 0;
//                });

                S('#ButtonNewPractice').exists().click();

                S('#AddPracticePage').exists();
            });
        }
    });

    test("Add Practice form has been inserted", function () {

        ok(S(S('#NewPracticeForm').children()).size(function (size) {
            return size > 0;
        }));
    });

    test("Can successfully add a new Practice", function () {

        S('#name').type("blah");

        S('#newpracticebutton').exists().click();
        ok(S('#PracticeListPage').exists());
    });
})