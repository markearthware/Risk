steal(
    './zoladex.css', // application CSS file
    './lib/jQueryMobile/jquery.mobile-1.0.css', //steal jquery mobile css   
    './models/models.js', // steals all your models
    './fixtures/fixtures.js', // sets up fixtures for your models
    // load controllers
    './controllers/intro_controller',
     './controllers/tabbar_controller',
     './controllers/prolist_controller',
     './controllers/practicelist_controller',
    './controllers/supportgrouplist_controller',
    
    function () { // configure your application

        steal.dev.log('jmvc is initilasing...');

        configureJqueryMobile();
        
        $('#page').zoladex_intro();

    }).then('./lib/jQueryMobile/jquery.mobile-1.0.js')//steal jquery mobile js

    function configureJqueryMobile() {

        $(document).bind("mobileinit", function () {
            steal.dev.log('jQM is initialising');
            $.mobile.touchOverflowEnabled = true;
        });

        $(document).bind('pagebeforecreate', function (e) {
            
            bindTabBar(e);

            bindPageControllers(e);
        });
    }

    function bindTabBar(e) {

        var pageClass = determinePageClass(e);

        $('.tabBarContainer').zoladex_tab_bar('destroy');

        $('.tabBarContainer').zoladex_tab_bar({ page: pageClass });
    }

    function determinePageClass(e) {
        
        if ($(e.target).filter('.hcpPage').length > 0) {
            return 'hcp';
        }

        if ($(e.target).filter('.calendarPage').length > 0) {
            return 'calendar';
        }

        if ($(e.target).filter('.progressPage').length > 0) {
            return 'progress';
        }

        if ($(e.target).filter('.supportPage').length > 0) {
            return 'support';
        }
        
        return '';
    }

    function bindPageControllers(e) {
        
        if ($(e.target).filter('#ProfessionalListPage').length > 0) {
            $('#ProfessionalListPage').zoladex_pro_list();
            return;
        }
        
        if ($(e.target).filter('#PracticeListPage').length > 0) {
            $('#PracticeListPage').zoladex_practice_list();
            return;
        }

        if ($(e.target).filter('#SupportGroupListPage').length > 0) {
            $('#SupportGroupListPage').zoladex_support_group_list();
            return;
        }   
    }