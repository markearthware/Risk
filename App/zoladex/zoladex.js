steal(
    './zoladex.css', // application CSS file
    './lib/jQueryMobile/jquery.mobile-1.0.css', //steal jquery mobile css
    './lib/jQueryValidation/validation.css',
    './models/models.js', // steals all your models
    './fixtures/fixtures.js', // sets up fixtures for your models
// load controllers
    './controllers/tabbar_controller',
    './controllers/hcplist_controller',
    './controllers/hcpdetails_controller',
    './controllers/hcpadd_controller',
    './controllers/practicelist_controller',
    './controllers/supportgrouplist_controller',

    function() { // configure your application


        localStorageDB.init();

        steal.dev.log('jmvc is initilasing...');

        configureJqueryMobile();

    }).then(
    './lib/jQueryMobile/jquery.mobile-1.0.js',
    './lib/jQueryValidation/jquery.validate.js'
        ); //steal jquery mobile js

    function configureJqueryMobile() {

        $(document).bind("mobileinit", function () {
            steal.dev.log('jQM is initialising...');
            $.mobile.touchOverflowEnabled = true;
        });

        $(document).bind('pagebeforecreate', function (e) {
            
            bindTabBar(e);

            bindPageControllers(e);
        });

        $(document).bind('pagecreate', function (e) {
            
            if ($(e.target).filter('#HcpListPage').length > 0) {
                $('#HcpListList').zoladex_hcp_list('loadData');
                return;
            }

            if ($(e.target).filter('#HcpDetailsPage').length > 0) {
                $('#HcpDetailsPage').zoladex_hcp_details('loadData');
                return;
            }
            
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
        
        // hcp controllers
        if ($(e.target).filter('#HcpListPage').length > 0) {
            $('#HcpListList').zoladex_hcp_list();
            return;
        }

        if ($(e.target).filter('#HcpDetailsPage').length > 0) {
            $('#HcpDetailsPage').zoladex_hcp_details();
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

        if ($('#NewHcpForm').length > 0) {
            $('#NewHcpForm').zoladex_hcp_add();
            $('#NewHcpForm').validate();
            return;
        }

       

        // calendar controllers
        
        // progress cotnrollers
    }