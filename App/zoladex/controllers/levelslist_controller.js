steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/psalevel.js',
    '../lib/mobiscroll/js/mobiscroll-1.5.2.js',
    '../lib/WebSQL/db.js',
     '../views/levels_list/init.ejs')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.LevelsList', {
    },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();
            new Zoladex.Models.Psalevel.findAll().done(this.callback('onDataLoad'));
        },
        onDataLoad: function (result) {
            $('#LevelsListContainer').html($.View('//zoladex/views/levels_list/init.ejs', result));
            $.mobile.hidePageLoadingMsg();
            $('#LevelsListContainer').listview('refresh');
        },
        '.deleteButton click': function (el) {
            var ctx = this;
            var levelId = $(el).attr("id");
            localStorage.levelId = levelId;
            $.mobile.changePage("../dialog/leveldeleteconfirmdialog.htm");
        },
        '#LevelsGraph click': function () {
            var levels = Zoladex.Models.Psalevel.findAll().done(this.callback('onDataLoad'));
            $.when(levels).done(function (result) {
                if (result.length > 1) {
                    $.mobile.changePage("levels.htm");
                } else {
                    $.mobile.changePage("../dialog/levelsdialog.htm");
                }

            });
        }
    });
});