steal('jquery/class', function () {

    $.Class('Zoladex.QSUtils',
    {
        getParams: function () {

            var queryString = window.location.href.split('?')[1].split('#')[0];

            return $.String.deparam(queryString);
        }
    },
    {


    });
})