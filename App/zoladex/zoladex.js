steal(
    './zoladex.css', // application CSS file
    './lib/jQueryMobile/jquery.mobile-1.0.css', //steal jquery mobile css   
    './models/models.js', // steals all your models
    './fixtures/fixtures.js', // sets up fixtures for your models
    './controllers/intro_controller',
     './controllers/tabbar_controller',
     './controllers/prolist_controller',
    function () { // configure your application

        steal.dev.log('jmvc init');

        configureJqueryMobile();
        
        $('#page').zoladex_intro();

    }).then('./lib/jQueryMobile/jquery.mobile-1.0.js')//steal jquery mobile css);

    function configureJqueryMobile() {

        $(document).bind("mobileinit", function () {
            steal.dev.log('mobileinit');
            $.mobile.touchOverflowEnabled = true;
        });

        $(document).bind('pagebeforecreate', function (e) {
            
            bindTabBar(e);

            bindPageControllers(e);
        });
    }

    function bindTabBar(e) {
        
        var folder = '';

        if ($(e.target).filter('.hcpPage').length > 0) {
            folder = 'hcp';
        }

        if ($(e.target).filter('.calendarPage').length > 0) {
            folder = 'calendar';
        }

        if ($(e.target).filter('.progressPage').length > 0) {
            folder = 'progress';
        }

        if ($(e.target).filter('.supportPage').length > 0) {
            folder = 'support';
        }

        $('.tabBarContainer').zoladex_tab_bar('destroy');

        $('.tabBarContainer').zoladex_tab_bar({ folder: folder });
    }

    function bindPageControllers(e) {

        if ($(e.target).filter('#ProfessionalListPage').length > 0) {
            $('#ProfessionalListPage').zoladex_pro_list();
        }    
    }