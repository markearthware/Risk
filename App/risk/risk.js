var baseurl;

steal(
        'jquery',
        'jquery/view/ejs',
        './lib/jQueryMobile/Overrides.css', // application CSS file
        './lib/jQueryMobile/jquery.mobile.structure-1.0.css',
        './lib/jQueryMobile/jquery.mobile-1.0.min.css', //steal jquery mobile css
        function () { // configure your application

            steal.dev.log('jmvc is initialising...');

            //getting base url
            baseurl = window.location.href.replace(/\/$|\/index\.html/i, '');

            configureJqueryMobile();
        }
    ).then( //steal jquery mobile js
        './lib/jQueryMobile/jquery.mobile-1.0.js',
        './models/websqlmodel.js'
    ).then(
        './lib/WebSQL/db.js',
        './lib/jQueryValidation/validation.css',
        './models/models.js', // steals all your models
        './controllers/controllers.js', // steals all controllers
        './lib/jQueryValidation/jquery.validate.js',
        './classes/qsutils.js',
         function () {
             localStorageDB.init();
         }
    );  

    function configureJqueryMobile() {

        $(document).bind('pagebeforecreate', function (e) {

        });

        $(document).bind('pagebeforecreate', function(e) {
            if ($(e.target).filter('#indexPage').length > 0) {
                $('#indexPage').risk_index();
                return;
            }

            if ($(e.target).filter('#AddTaskPage').length > 0) {
                $('#NewTaskForm').risk_task();
                return;
            }

   
        });  

        $(document).bind('pagecreate', function (e) {

            if ($(e.target).filter('#HazardsPage').length > 0) {
                $('#HazardsContent').risk_hazards();
                return;
            }

            if ($(e.target).filter('#WhosPage').length > 0) {
                $('#WhosContent').risk_whos();
                return;
            }
            
        });

        $(document).bind('pagehide', function (e, args) {


        });
    }

