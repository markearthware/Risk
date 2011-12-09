steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/category.js',
    '../models/question.js',
    '../models/hcp.js',
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
            var hcpdef = Zoladex.Models.Hcp.findAll();

            $.when(catdef, questiondef, hcpdef).done(function (catres, questionres, hcpres) {
                $("h1.ui-title").append(catres.Category);
                
                var view = $.View('//zoladex/views/question_addedit/init.ejs', {
                    questionList: questionres,
                    hcpList: hcpres
                });
                
                $('#QuestionForm').html(view).trigger('create');
            });
        },
        submit: function (el, ev) {
        },

        onInsertSuccess: function () {
        },

        onInsertFail: function () {
        }
    });
});