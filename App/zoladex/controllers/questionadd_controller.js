steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/category.js',
    '../models/question.js',
    '../lib/WebSQL/db.js',
    '../views/question_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.QuestionAdd', {
    },
    {
      
        init: function () {
            var params = Zoladex.QSUtils.getParams();
            var categoryId = params.category;

            var catdef = Zoladex.Models.Category.findOne(categoryId);
            var questiondef = Zoladex.Models.Question.findByCategory(categoryId);
            //var hcpdef = Zoladex.Models.Hcp.findAll();

            $.when(catdef, questiondef).done(function (catres, questionres) {
                $("h1.ui-title").append(catres.Category);

                var view = $.View('//zoladex/views/question_addedit/init.ejs', {
                    questionList: questionres
                });

                $('#Questions').html(view).trigger('create');
                $('#Questions').listview('refresh');

            });
        },
        '.question click': function (el) {

            localStorage.questionText = $(el).text();

            $.mobile.changePage('questions-hcp.htm');

        }
    });
});