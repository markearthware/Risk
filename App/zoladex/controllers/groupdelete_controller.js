steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/practice.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.GroupDelete', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {
            var params = Zoladex.QSUtils.getParams();
            Zoladex.Models.Group.destroy(params.id);
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
});