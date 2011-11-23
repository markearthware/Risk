steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view'
    )
    .then('../views/intro/init.ejs', function ($) {
        $.Controller('Zoladex.Controllers.Intro', {
            init: function () {
                this.element.html(this.view());
               // $('#page').page('refresh');
            }
        });
    });