var baseurl;

steal(
        'jquery',
        'jquery/view/ejs',
        './lib/jQueryMobile/Overrides.css', // application CSS file
        './lib/jQueryMobile/jquery.mobile.structure-1.1.1.css',
        './lib/jQueryMobile/jquery.mobile-1.1.1.css', //steal jquery mobile css
        './lib/jQueryMobile/eRisk.min.css',
        function () { // configure your application

            steal.dev.log('jmvc is initialising...');

            //getting base url
            baseurl = window.location.href.replace(/\/$|\/index\.html/i, '');

            configureJqueryMobile();
        }
    ).then( //steal jquery mobile js
        './lib/jQueryMobile/jquery.mobile-1.1.0.js',
        './models/websqlmodel.js'
    ).then(
        './lib/WebSQL/db.js',
        './lib/jQueryValidation/validation.css',
        './models/models.js', // steals all your models
        './controllers/controllers.js', // steals all controllers
        './lib/jQueryValidation/jquery.validate.js',
         function () {
             localStorageDB.init();
         }
    );  

    function configureJqueryMobile() {

        $(document).bind("mobileinit", function () {
            //apply overrides here
            $.mobile.defaultPageTransition = "none";
            $.mobile.defaultDialogTransition = "none";
			$.mobile.allowCrossDomainPages = true;
        });
        
        $(document).bind('pagebeforecreate', function (e) {

        });

        $(document).bind('pagebeforecreate', function(e) {
            if ($(e.target).filter('#indexPage').length > 0) {
                $('#indexPage').risk_index();
                return;
            }

            if ($(e.target).filter('#AddTaskPage').length > 0) {
                $('#NewTaskForm').risk_task_add();
                return;
            }

            if ($(e.target).filter('#EditTaskPage').length > 0) {
                $('#EditTaskForm').risk_task_edit();
                return;
            }

            if ($(e.target).filter('#EmailReportPage').length > 0) {
                $('#EmailReportForm').risk_email_report();
                return;
            }

            if ($(e.target).filter('#NewHazardPage').length > 0) {
                $('#NewHazardForm').risk_hazard();
                return;
            } 
        });

        $(document).bind('pageshow', function (e) {

            if ($(e.target).filter('#MyAssessmentsPage').length > 0) {
                $('#MyAssessmentsPage').risk_my_assessments();
                return;
            }

            if ($(e.target).filter('#MyCompletedAssessmentsPage').length > 0) {
                $('#MyCompletedAssessmentsPage').risk_my_completed_assessments();
                return;
            }

            if ($(e.target).filter('#ControlsPage').length > 0) {
                $('#ControlsPage').risk_controls();
                return;
            }
            
            if ($(e.target).filter('#WhosPage').length > 0) {
                $('#WhosPage').risk_whos();
                return;
            }
            
            if ($(e.target).filter('#DetailsPage').length > 0) {
                $('#DetailsPage').risk_details();
                return;
            }

            if ($(e.target).filter('#CompletedDetailsPage').length > 0) {
                $('#CompletedDetailsPage').risk_completed_details();
                return;
            }
        });

        $(document).bind('pagecreate', function (e) {

            if ($(e.target).filter('#InProgressPage').length > 0) {
                $('#InProgressPage').risk_in_progress();
                return;
            }

            if ($(e.target).filter('#CompletedPage').length > 0) {
                $('#CompletedPage').risk_completed();
                return;
            }
            
            if ($(e.target).filter('#HazardsPage').length > 0) {
                $('#HazardsPage').risk_hazards();
                return;
            }

            if ($(e.target).filter('#DeleteConfirmPage').length > 0) {
                $('#DeleteConfirmPage').risk_delete();
                return;
            }

            if ($(e.target).filter('#DeleteTaskConfirmPage').length > 0) {
                $('#DeleteTaskConfirmPage').risk_delete_task();
                return;
            }

            if ($(e.target).filter('#DeleteCompletedTaskConfirmPage').length > 0) {
                $('#DeleteCompletedTaskConfirmPage').risk_delete_completed_task();
                return;
            }

            if ($(e.target).filter('#DeleteHazardConfirmPage').length > 0) {
                $('#DeleteHazardConfirmPage').risk_delete_hazard();
                return;
            }

            if ($(e.target).filter('#HowAddDialog').length > 0) {
                $('#HowAddDialog').risk_add_how();
                return;
            }
            
            if ($(e.target).filter('#ControlAddDialog').length > 0) {
                $('#ControlAddDialog').risk_add_control();
                return;
            }
            
            if ($(e.target).filter('#FurtherControlAddDialog').length > 0) {
                $('#FurtherControlAddDialog').risk_add_further_control();
                return;
            }
            
        });
    }

