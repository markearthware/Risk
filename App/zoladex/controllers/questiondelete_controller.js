steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/myquestionlist.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.QuestionDelete', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {
            
            var deletedef = Zoladex.Models.MyQuestionList.destroy(localStorage.questionId);
            $.when(deletedef).done(function () {
                $.mobile.changePage("../myquestions.htm");
            });
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
});