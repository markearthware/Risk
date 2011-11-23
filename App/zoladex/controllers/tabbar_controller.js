steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view'
    )
    .then('../views/tab_bar/init.ejs', function ($) {
        $.Controller('Zoladex.Controllers.TabBar', {
            init: function () {

                this.element.html(this.view());

                switch (this.options.folder) {
                    case "hcp":
                        this.selectHcp();
                        break;
                    case 'calendar':
                        this.selectCalendar();
                        break;
                    case 'progress':
                        this.selectProgress();
                        break;
                    case 'support':
                        this.selectSupport();
                        break; 
                    default:
                        //select nothing
                }
            },
            makeActive: function (element) {
                element.addClass('ui-btn-active');
            },
            selectHcp: function () {
                this.makeActive($('.hcpTab'));
            },
            selectCalendar: function () {
                this.makeActive($('.calendarTab'));
            },
            selectProgress: function () {
                this.makeActive($('.progressTab'));
            },
            selectSupport: function () {
                this.makeActive($('.supportTab'));
            }
        });
    });