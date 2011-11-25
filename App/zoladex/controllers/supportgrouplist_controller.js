steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SupportGroupList', {
            init: function () {
                alert('todo: load support group data from local db');
            }
        });
    });