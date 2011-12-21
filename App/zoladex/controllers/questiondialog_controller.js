steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view'
    )
    .then(function ($) {
        $.Controller('Zoladex.Controllers.QuestionDialog', {
    },
    {
        init: function () {
            $('#QuestionText').append(localStorage.questionText);
        }
    });
});