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
                    $('.weblink').removeAttr("href");
                    $('.weblink').attr("class","weblink2");
                }
            }

        },
        '.weblink click': function (el, ev) {

            ev.preventDefault();

            if ($('#leaveAppDialog')) {
                $('#leaveAppDialog').remove();
            }

            this.element.parent().append('//zoladex/views/alerts/leaveAppDialog', {

                toLink: el.attr('href'),
                fromLink: document.location.href
            });

            $('#leaveAppDialog').page();

            $.mobile.changePage($('#leaveAppDialog'));
        }
    });
    });