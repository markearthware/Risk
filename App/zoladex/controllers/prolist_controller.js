steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'lib/WebSQL/db.js'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.ProList', {
            init: function () {
                localStorageDB.init(function () {
                    
                    //find the list
                    for (var i = 0; i < localStorageDB.hcps.length; i++) {
                        alert(localStorageDB.hcps[i].Title);
                        //add an element to the list
                        
                    }
                });
            }
        });
    });