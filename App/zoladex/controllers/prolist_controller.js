steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.ProList', {
            init: function () {
                alert('todo: load data from local db');
            }
        });
    });