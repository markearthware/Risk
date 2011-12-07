steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/hcp.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.HcpDelete', {
        },
    {
        init: function () {


        },

        '#confirmYes click': function (el) {
            var params = Zoladex.QSUtils.getParams();
            Zoladex.Models.Hcp.destroy(params.id);
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
    });