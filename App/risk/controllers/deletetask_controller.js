steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Risk.Controllers.DeleteTask', {
    },
    {
        init: function () {

        },
        '.no click': function (el) {
            $.mobile.changePage("../inprogress.htm",{ transition: "none"});
        },
        '.yes click': function (el) {
            var id = localStorage.deleteTaskId;
            var tasksDef = Risk.Models.Task.deleteOne(id);
            $.when(tasksDef).done(function () {
                $.mobile.changePage("../inprogress.htm",{ transition: "none"});
            });
        }
    });
});