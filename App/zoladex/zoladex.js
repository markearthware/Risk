steal(
    './zoladex.css', // application CSS file
    './lib/jQueryMobile/jquery.mobile-1.0.css', //steal jquery mobile css   
    './models/models.js', // steals all your models
    './fixtures/fixtures.js', // sets up fixtures for your models
    './controllers/intro_controller',
     './controllers/tabbar_controller',
    function () { // configure your application

        steal.dev.log('jmvc init');

        configureJqueryMobile();

        $('#page').zoladex_intro();

        $('#footer').zoladex_tab_bar();

    }).then('./lib/jQueryMobile/jquery.mobile-1.0.js')//steal jquery mobile css);


    function configureJqueryMobile() {

        $(document).bind("mobileinit", function () {
            steal.dev.log('mobileinit');
            $.mobile.touchOverflowEnabled = true;
        });

        $(document).bind('pageload', function () {
            $('#footer').zoladex_tab_bar();
        });
    }