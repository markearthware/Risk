steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.UsefulOrgs', {
        },
    {
        init: function () {
            if (navigator.network) {
                var networkState = navigator.network.connection.type;

                if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
                    //Clear href attr and remove link icon
                    $('#weblink').attr('href', 'dialog/notconnected.htm');
                    $('#weblink').parent().attr('data-icon', 'false');
                }
            }
        },
        '.weblink click': function (el, ev) {

            ev.preventDefault();

            if ($('#leaveAppDialog')) {
                $('#leaveAppDialog').remove();
            }

            var dialog = $.View('../../../views/alerts/leaveAppDialog', {

                toLink: el.attr('href'),
                fromLink: document.location.href
            });

            this.element.parent().append(dialog);

            $.mobile.changePage($('#leaveAppDialog'));
        }
    });
    });