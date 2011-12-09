steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/myquestion.js',
    '../lib/WebSQL/db.js',
    '../views/question_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.MyQuestionsList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            $.View('//zoladex/views/question_list/init.ejs', Zoladex.Models.MyQuestion.findAll(), null, this.callback(this.refreshList));
        },
        refreshList: function (html) {
            $.mobile.hidePageLoadingMsg();
            $('#QuestionList').html(html);
            $('#QuestionList').trigger('create');
        }
    });
});

