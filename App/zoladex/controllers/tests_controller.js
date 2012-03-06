steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.Tests', {
        },
    {
        init: function () {
            if (localStorage.expandAccordion != "") {

                //expand the correct div
                $('#gleasonExpander').attr("data-collapsed", "false");

                $('#TestsPage').bind('pageshow', function (e) {
                    //scroll down to it
                    var position = $("#gleasonExpander").position().top;
                    $.mobile.silentScroll(parseInt(position));
                });

                localStorage.expandAccordion = "";
            }
        }
    });
    });