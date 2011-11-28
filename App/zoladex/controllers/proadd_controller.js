steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/professional.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.ProAdd', {
    },
    {
        init: function () {

        },
        submit: function (el, ev) {

            ev.preventDefault();

            var params = $(el).formParams();

            var createtask = this.addHcp(params);

            return false;
        },
        addHcp: function (newhcp) {

            Zoladex.Models.Professional.create(newhcp);
        }
    });
});