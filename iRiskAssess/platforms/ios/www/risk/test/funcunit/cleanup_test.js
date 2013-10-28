﻿steal("funcunit", function () {
    module("Clean up data", {
        setup: function () {

            S.open("../index.html?dropdb=1");
            S("#cannotmatch").wait(2000);
            S.open("../index.html");  
        }
    });
    test("No Contacts loaded", function () {
        S('#btnContinue').exists().click();

        S('#hcprow').exists().click();

        S('#Hcps').exists().click();

        S('#HcpListPage').exists(function() {
            ok(S('#HcpList li').text("You have not added any Healthcare Professionals yet."));  
        });

        
    });
})