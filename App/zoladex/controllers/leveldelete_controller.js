steal('jquery/controller',
    'jquery/lang/string/deparam/deparam.js',
    'jquery/controller/view',
    '../models/psalevel.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.LevelDelete', {
    },
    {
        init: function () {
        },

        '#confirmYes click': function (el) {
            var def = Zoladex.Models.Psalevel.destroy(localStorage.levelId);
            $.when(def).done(function () {
                $.mobile.changePage("../psa/levelslist.htm");
            });
            
        },
        '#confirmNo click': function (el) {
            $('.ui-dialog').dialog('close');
        }
    });
});