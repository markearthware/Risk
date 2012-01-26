steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.SideEffects', {
    },
    {
        init: function () {
            if (navigator.network) {
                var networkState = navigator.network.connection.type;
                if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
                    //Clear href attr and remove link icon
                    var text = $('#weblink').text();
                    $('#weblink').after(text);
                    $('#weblink').remove();
                }
            }

        }
    });
});