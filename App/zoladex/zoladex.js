var baseurl;

var alertHasBeenShown = false;

steal(
        'jquery',
        'jquery/view/ejs',
        './lib/jQueryMobile/Overrides.css', // application CSS file
        './lib/jQueryMobile/AZBaseTemplate.css',
        './lib/jQueryMobile/jquery.mobile.structure-1.0.css', //steal jquery mobile css
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
        // load controllers and libraries for other pages and init db
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

        //bind controllers to page before create, default bind time.
        $(document).bind('pagebeforecreate', function (e) {

            bindTabBar(e);

            bindHcpControllers(e);

            bindPracticeControllers(e);

            bindSymptomControllers(e);

            bindAppointmentControllers(e);

            if ($(e.target).filter('#indexPage').length > 0) return '';

            if ($(e.target).filter('#SupportGroupListPage').length > 0) {

                $('#SupportGroupListPage').zoladex_support_group_list();

                return true;
            }

            if ($('#AddLevelForm').length > 0) {

                $('#AddLevelForm').zoladex_level_add();

                return true;
            }
        });

        // bind controllers to pagecreate, typically pages containing widgets that have their data loaded dynamically
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

            if ($('#NewPracticeForm').length > 0) {
                $('#NewPracticeForm').zoladex_practice_add();
                $('#NewPracticeForm').validate();
                return;
            }

            if ($(e.target).filter('#MyQuestionListPage').length > 0) {
                $('#MyQuestionListPage').zoladex_my_questions_list();
                return;
            }

            if ($(e.target).filter('#LevelsPage').length > 0) {
                $('#LevelsPage').zoladex_level_chart();
            }

            if ($(e.target).filter('#HomePage').length > 0) {
                $('#HomePage').zoladex_home();
                return;
            }
            
            if ($(e.target).filter('#AlertDialog').length > 0) {
                $('#AlertDialog').zoladex_alerts();
                return;
            } 
        });

        // bind contollers to pagehide, typically forms that may require access to a query string.
        $(document).bind('pagehide', function (e, args) {

            if ($(args.nextPage).filter('#HcpDetailsPage').length > 0) {

                if ($('#HcpDetailsPage').controllers().length < 1) {
                    
                    $('#HcpDetailsPage').zoladex_hcp_details();
                }

                $('#HcpDetailsPage').zoladex_hcp_details('loadData');
                
                return;
            }

            if ($(args.nextPage).filter('#HcpEditPage').length > 0) {

                if ($('#EditHcpForm').controllers().length < 1) {
                    
                    $('#EditHcpForm').zoladex_hcp_edit();
                }

                $('#EditHcpForm').zoladex_hcp_edit('loadData');
                
                return;
            }

            if ($(args.nextPage).filter('#AddHcpPage').length > 0) {

                if ($('#NewHcpForm').controllers().length < 1) {
                    
                    $('#NewHcpForm').zoladex_hcp_add();
                }   
                $('#NewHcpForm').zoladex_hcp_add('loadData');
                return;
            }

            if ($(args.nextPage).filter('#EditAppointmentPage').length > 0) {

                if ($('#EditAppointmentForm').controllers().length < 1) {   
                    
                    $('#EditAppointmentForm').zoladex_patient_appointment_edit();
                }

                $('#EditAppointmentForm').zoladex_patient_appointment_edit('loadData');
                
                return;
            }

            if ($('#NewAppointmentForm').length > 0) {
                  
                $('#NewAppointmentForm').zoladex_patient_appointment_add();
                
                return;
            }

            if ($(args.nextPage).filter('#PracticeDetailsPage').length > 0) {

                if ($('#PracticeDetailsPage').controllers().length == 0) {
                    
                    $('#PracticeDetailsPage').zoladex_practice_details();
                }

                $('#PracticeDetailsPage').zoladex_practice_details('loadData');
                
                return;
            }

            if ($(args.nextPage).filter('#PracticeEditPage').length > 0) {

                if ($('#EditPracticeForm').controllers().length == 0) {
                    
                    $('#EditPracticeForm').zoladex_practice_edit();
                }

                $('#EditPracticeForm').zoladex_practice_edit('loadData');
                
                return;
            }

            if ($(args.nextPage).filter('#SymptomEditPage').length > 0) {

                $('#EditSymptomForm').zoladex_symptom_edit();
                
                return;
            }
            
            if ($(args.nextPage).filter('#SelectQuestionPage').length > 0) {

                $('#SelectQuestionPage').zoladex_question_add();
                
                return;
            }

            if ($('#QuestionDialog').length > 0) {

                $('#QuestionDialog').zoladex_question_dialog();

                return;
            }
        });
    }

    function bindHcpControllers(e) {
        
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

        if ($('#HCPDeleteConfirmDialog').length > 0) {

            $('#HCPDeleteConfirmDialog').zoladex_hcp_delete();

            return;
        }

        if ($('#AppointmentTypeAddDialog').length > 0) {

            $('#AppointmentTypeAddDialog').zoladex_appointment_type_add();

            return;
        }

        if ($('#SymptomTypeAddDialog').length > 0) {

            $('#SymptomTypeAddDialog').zoladex_symptom_type_add();

            return;
        }
    }

    function bindPracticeControllers(e) {
        
        if ($(e.target).filter('#PracticeListPage').length > 0) {

            $('#PracticeListList').zoladex_practice_list();

            return;
        }

        if ($('#PracticeDeleteConfirmDialog').length > 0) {

            $('#PracticeDeleteConfirmDialog').zoladex_practice_delete();

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
    }
    
    function bindSymptomControllers(e){

        if ($(e.target).filter('#SymptomsListPage').length > 0) {

            $('#SymptomListContainer').zoladex_symptom_list();

            return;
        }

        if ($(e.target).filter('#SymptomRecordPage').length > 0) {
            $('#RecordSymptomForm').zoladex_symptom_add();
            return;
        }

        if ($('#SymptomDeleteConfirmDialog').length > 0) {

            $('#SymptomDeleteConfirmDialog').zoladex_symptom_delete();

            return;
        }
    }

    function bindAppointmentControllers(e) {
        
        if ($(e.target).filter('#calendarPage').length > 0) {

            $('#AppointmentsList').zoladex_patient_appointment_list();

            return;
        }
        
        if ($('#AppointmentDeleteConfirmDialog').length > 0) {

            $('#AppointmentDeleteConfirmDialog').zoladex_patient_appointment_delete();

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
    }
    
    function bindTabBar(e) {

        var pageClass = determinePageClass(e);

        // dont bother for the homepage or for the simple dialogs
        if (pageClass != "index") {

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
