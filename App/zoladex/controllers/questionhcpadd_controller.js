steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/myquestion.js',
    '../models/hcp.js',
    '../lib/WebSQL/db.js',
    '../views/questionhcp_add/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.QuestionHcpAdd', {
    },
    {

        init: function () {

            var hcpdef = Zoladex.Models.Hcp.findAll();

            $.when(hcpdef).done(function (hcpres) {
                $("h1.ui-title").append(localStorage.customQuestion ? localStorage.customQuestion : localStorage.questionText);
                $('#questionPlaceholder').text(localStorage.customQuestion ? localStorage.customQuestion : localStorage.questionText);

                var view = $.View('//zoladex/views/questionhcp_add/init.ejs', {
                    hcpList: hcpres
                });

                $('#Hcps').html(view).trigger('create');
                $('#Hcps').listview('refresh');
            });
        },
        '.hcp click': function (el) {
            var hcpId = $(el).attr("id");
            var question = localStorage.customQuestion ? localStorage.customQuestion : localStorage.questionText;
            localStorage.questionText = "";
            localStorage.customQuestion = "";
            var model = { Question: question, HcpId: hcpId };
            new Zoladex.Models.MyQuestion(model).save(function () { $.mobile.changePage('myquestions.htm', 'flip', false, true); });
        }

    });
});