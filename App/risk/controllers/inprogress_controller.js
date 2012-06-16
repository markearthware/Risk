steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/inprogress/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.InProgress', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var tasksDef = Risk.Models.Task.findAllInProgress();
            var view;
            $.when(tasksDef).done(function (tasksRes) {
                view = $.View('//risk/views/inprogress/init.ejs', tasksRes);
                $('#InProgressContent').html(view);
                $('#InProgressList').listview();
                $('#InProgressPage').trigger("create");
            });
        },
        '.task-item click': function (el) {
            var id = $(el).attr("id");
            localStorage.taskId = id;
        },
        '.delete click': function (el) {
            var id = $(el).attr("id");
            localStorage.deleteTaskId = id;
        }
    });
    });