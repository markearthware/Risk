steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js'
)
    .then(function ($) {
        $.Controller('Zoladex.Controllers.CustomQuestionAdd', {
    },
    {
        init: function () {
            $.validator.setDefaults({
                errorPlacement: function (error, element) {
                    $(element).attr({ "title": error.text() });
                },
                highlight: function (element) {

                    $(element).removeClass("textinput");
                    $(element).addClass("errorHighlight");
                },
                unhighlight: function (element) {

                    $(element).removeClass("errorHighlight");
                    $(element).addClass("textinput");
                }
            });
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#CustomQuestionForm').valid()) {

                var params = el.formParams();

                var structure = {
                    Question: params.Question
                };

                localStorage.customQuestion = params.Question;
                
                $.mobile.changePage("questions-hcp.htm");
               
            }

            return false;
        }
    });
});