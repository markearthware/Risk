steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/hazards/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Hazards', {
    },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var listDef = Risk.Models.Hazards.findAll();
            var view;
            $.when(listDef).done(function (listRes) {
                view = $.View('//risk/views/hazards/init.ejs', listRes);
                $('#HazardsContent').html(view);
                $('#HazardsList').listview();
            });
        },
        '.hazard-item click': function (el) {
            localStorage.hazardId = $(el).attr('id');
            $.mobile.changePage("whos.htm");
        },
        '#newHazard click': function () {
            $.mobile.changePage("dialog/newhazard.htm");
        },
        '#backToTaskAdd click': function () {
            if (localStorage.addToExisting == "true") {
                localStorage.addToExisting = "";
                $.mobile.changePage("myassessments.htm", { reverse: true });
            }
            else {
                var taskDef = Risk.Models.Task.deleteOne(localStorage.taskId);
                $.mobile.changePage("taskadd.htm", { reverse: true });
            }
        }
    });
});