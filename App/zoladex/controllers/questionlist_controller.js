steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/myquestionlist.js',
    '../lib/WebSQL/db.js',
    '../views/question_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.MyQuestionsList', {
    },
    {

        init: function () {

            var ctx = this;
            $.mobile.showPageLoadingMsg();

            var deferred = Zoladex.Models.MyQuestionList.findAll();

            $.when(deferred).done(function (list) {
                steal.dev.log(list);
                $.View('//zoladex/views/question_list/init.ejs', list, null, ctx.callback(ctx.refreshList));
            });
        },
        refreshList: function (html) {
            $.mobile.hidePageLoadingMsg();
            $('#QuestionList').html(html);
            $('#QuestionList').listview('refresh');
        },
        '.deleteButton click': function (el) {
            var ctx = this;
            var questionId = $(el).attr("id");
            var deletedef = Zoladex.Models.MyQuestionList.destroy(questionId);
            $.when(deletedef).done(function () {
                ctx.init();
            });
        }
    });
});

