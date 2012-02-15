steal('jquery/controller')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.NotConnected', {
    },
    {
        init: function () {
        },
        '#OkButton click': function () {
            $('#NotConnectedDialog').dialog('close');
        }
    });
});