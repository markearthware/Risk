steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js',
    '../models/myquestion.js',
    '../views/question_addedit/init.ejs'
)
    .then(function ($) {
        $.Controller('Zoladex.Controllers.CustomQuestionEdit', {
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
            
            var questionDef = Zoladex.Models.MyQuestion.findOne(localStorage.questionId);

            $.when(questionDef).done(function(questionRes) {

                var view = $.View('//zoladex/views/question_addedit/init.ejs',
                    {   id: questionRes.id,
                        Question: questionRes.Question,
                        Answer: questionRes.Answer
                    });

                $('#EditCustomQuestionForm').html(view).trigger('create');
            });
        },
        submit: function (el, ev) {
            ev.preventDefault();

            if ($('#EditCustomQuestionForm').valid()) {

                var params = el.formParams();

                var model = { id: params.id, Question: params.Question, Answer: params.Answer };
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