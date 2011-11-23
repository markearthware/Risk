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
                    default:
                        //select nothing
                }
            },
            selectHcp: function () {
                $('.hcpTab').addClass('ui-btn-active');
            },
            selectCalendar: function () {
                $('.calendarTab').addClass('ui-btn-active');
            }
        });
    });