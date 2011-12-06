
steal(
        'jquery',
        'jquery/view/ejs',
        './zoladex.css', // application CSS file
        './lib/jQueryMobile/jquery.mobile-1.0.css', //steal jquery mobile css
        //'./lib/firebug-lite.js',
        function () { // configure your application

            steal.dev.log('jmvc is initilasing...');

            configureJqueryMobile();

        }
    ).then( //steal jquery mobile js
        './lib/jQueryMobile/jquery.mobile-1.0.js',
        './models/websqlmodel.js'       
    ).then(
        // load controllers and libraries for other pages and init db
        './lib/jQueryValidation/validation.css',
        './models/models.js', // steals all your models
        './lib/jQueryValidation/jquery.validate.js',
        './controllers/tabbar_controller',
        './controllers/hcplist_controller',
        './controllers/hcpdetails_controller',
        './controllers/hcpadd_controller',
        './controllers/hcpedit_controller',
        './controllers/practicelist_controller',
        './controllers/practicedetails_controller',
        './controllers/practiceadd_controller',
        './controllers/practiceedit_controller',
        './controllers/supportgrouplist_controller',
        './controllers/patientappointmentadd_controller',
        './controllers/patientappointmentedit_controller',
        './controllers/patientappointmentlist_controller',
        './controllers/symptomlist_controller',
        './controllers/symptomrecord_controller',
        './controllers/symptomedit_controller',
        
         function () {
             localStorageDB.init();
         }
    );  

    function configureJqueryMobile() {

        $(document).bind('pagebeforecreate', function (e) {
            
            bindTabBar(e);

            bindPageControllers(e);
        });

        $(document).bind('pagecreate', function (e) {
            
            if ($(e.target).filter('#HcpListPage').length > 0) {
                $('#HcpListList').zoladex_hcp_list('loadData');
                return;
            }

            if ($(e.target).filter('#PracticeListPage').length > 0) {
                $('#PracticeListList').zoladex_practice_list('loadData');
                return;
            }
            

            if ($(e.target).filter('#SymptomsListPage').length > 0) {
                $('#SymptomListContainer').zoladex_symptom_list('loadData');
                return;
            }

        });

        $(document).bind('pagehide', function (e, args) {
            
            if ($(args.nextPage).filter('#HcpDetailsPage').length > 0) {
                $('#HcpDetailsPage').zoladex_hcp_details('loadData');
                return;
            }
            
            if ($(args.nextPage).filter('#HcpEditPage').length > 0) {
                $('#EditHcpForm').zoladex_hcp_edit('loadData');
                return;
            }

            if ($(args.nextPage).filter('#EditAppointmentPage').length > 0) {
                $('#EditAppointmentForm').zoladex_patient_appointment_edit('loadData');
                return;
            }
            
            if ($(args.nextPage).filter('#PracticeDetailsPage').length > 0) {
                $('#PracticeDetailsPage').zoladex_practice_details('loadData');
                return;
            }
            if ($(args.nextPage).filter('#PracticeEditPage').length > 0) {
                $('#EditPracticeForm').zoladex_practice_edit('loadData');
                return;
            }
            if ($(args.nextPage).filter('#SymptomEditPage').length > 0) {
                $('#EditSymptomForm').zoladex_symptom_edit();
                return;
            }
        });
    }

    function bindPageControllers(e) {
            if ($(e.target).filter('#indexPage').length > 0) return '';

            // hcp controllers
            if ($(e.target).filter('#HcpListPage').length > 0) {
                $('#HcpListList').zoladex_hcp_list();
                return;
            }

            if ($(e.target).filter('#HcpDetailsPage').length > 0) {
                $('#HcpDetailsPage').zoladex_hcp_details();
                return;
            }

            if ($('#NewHcpForm').length > 0) {
                $('#NewHcpForm').zoladex_hcp_add();
                $('#NewHcpForm').validate();
                return;
            }
            if ($('#EditHcpForm').length > 0) {
                $('#EditHcpForm').zoladex_hcp_edit();
                $('#EditHcpForm').validate();
                return;
            }

            //Practice/Hospitals controllers
            if ($(e.target).filter('#PracticeListPage').length > 0) {
                $('#PracticeListList').zoladex_practice_list();
                return;
            }

            if ($(e.target).filter('#PracticeDetailsPage').length > 0) {
                $('#PracticeDetailsPage').zoladex_practice_details();
                return;
            }

            if ($('#NewPracticeForm').length > 0) {
                $('#NewPracticeForm').zoladex_practice_add();
                $('#NewPracticeForm').validate();
                return;
            }

            if ($('#EditPracticeForm').length > 0) {
                $('#EditPracticeForm').zoladex_practice_edit();
                $('#EditPracticeForm').validate();
            }

            //Appointment controllers
            if ($(e.target).filter('#calendarPage').length > 0) {
                $('#AppointmentsList').zoladex_patient_appointment_list();
                return;
            }        

            if ($('#NewAppointmentForm').length > 0) {
                $('#NewAppointmentForm').zoladex_patient_appointment_add();
                $('#NewAppointmentForm').validate();
                  return;
            }

            if ($('#EditAppointmentForm').length > 0) {
                $('#EditAppointmentForm').zoladex_patient_appointment_edit();
                $('#EditAppointmentForm').validate();
                return;
            }

            // progress controllers 

            //Support controllers
            if ($(e.target).filter('#SupportGroupListPage').length > 0) {
                $('#SupportGroupListPage').zoladex_support_group_list();
                return;
            }
        
            // progress cotnrollers

            if ($(e.target).filter('#SymptomsListPage').length > 0) {
                $('#SymptomListContainer').zoladex_symptom_list();
                   return;
            }

            if ($(e.target).filter('#SymptomRecordPage').length > 0) {
                $('#RecordSymptomForm').zoladex_symptom_record();
                return;
            }
        }

        function bindTabBar(e) {

            var pageClass = determinePageClass(e);

            // dont bother for the homepage or for the simple dialogs
            if (pageClass != "index" && pageClass != "ui-simpledialog-dialog") {
                $('.tabBarContainer').zoladex_tab_bar('destroy');
                $('.tabBarContainer').zoladex_tab_bar({ page: pageClass });
            }
        }

        function determinePageClass(e) {

            var pageClass = $(e.target).attr('class');

            if (pageClass != undefined) {
                return pageClass.replace('Page', '');
            }
            return 0;
        }
