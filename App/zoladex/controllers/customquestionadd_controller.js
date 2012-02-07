steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js',
    '../models/myquestion.js',
    '../views/question_addedit/init.ejs'
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

            var view = $.View('//zoladex/views/question_addedit/init.ejs',
                {   id: "",
                    Question: "",
                    Answer: ""
                });

            $('#CustomQuestionForm').html(view).trigger('create');
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#CustomQuestionForm').valid()) {

                var params = el.formParams();

                var model = { Question: params.Question, Answer: params.Answer };
                new Zoladex.Models.MyQuestion(model).save(
                    function () {
                        $.mobile.changePage('myquestions.htm', 'flip', false, true);
                    }
                );
            }
            return false;
        }
    });
    });