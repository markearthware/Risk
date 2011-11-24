steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeList', {
            init: function () {
                alert('todo: load practice data from local db');
            }
        });
    });