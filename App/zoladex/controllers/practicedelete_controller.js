steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/practice.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.PracticeDelete', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {
            var params = Zoladex.QSUtils.getParams();
            Zoladex.Models.Practice.destroy(params.id);
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
});