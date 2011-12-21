steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/category.js',
    '../models/question.js',
    '../models/myquestion.js',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../views/question_addedit/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.QuestionAdd', {
    },
    {
        num: 0,

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
            //loop through select elements in form and add selected question text and hcp id to myquestions table
            var ctx = this;
            
            if ($('#CustomQuestionText').val() && $('#CustomQuestionDdl option:selected').val() !== '-1') {
                var questionObj = { Question: $('#CustomQuestionText').val(), HcpId: $('#CustomQuestionDdl option:selected').val() };
                var questionObj2 = { Question: $('#CustomQuestionText').val(), CategoryId: $('#catId').val() };
                new Zoladex.Models.Question(questionObj2).save();
                new Zoladex.Models.MyQuestion(questionObj).save(ctx.callback('onInsertSuccess'), ctx.callback('onInsertFail'));
            }
            
            this.num = this.count();
            $('form #QuestionDdl option:selected').each(function (index) {
                if ($(this).val() !== '-1') {
                    var questionText = $('#Question' + index).text();
                    //add question text and hcpID to myquestions db table
                    var questionObj = { Question: questionText, HcpId: $(this).val() };
                    new Zoladex.Models.MyQuestion(questionObj).save(ctx.callback('onInsertSuccess'), ctx.callback('onInsertFail'));
                }
            });

            return false;
        },

        onInsertSuccess: function () {
            this.num--;

            if (this.num == 1) {
                $.mobile.changePage('myquestions.htm');
            }

            //$.mobile.changePage('myquestions.htm');
        },

        onInsertFail: function () {
            $.mobile.changePage("../pages/hcp/dialog/error.htm");
        },

        count: function () {
            var count = 0;
            $('form select option:selected').each(function (index) {
                if ($(this).val() !== '-1') {
                    count++;
                }
            });
            return count;
        }
    });
});