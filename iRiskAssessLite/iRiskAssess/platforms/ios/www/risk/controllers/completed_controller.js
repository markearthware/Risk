steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/completed/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Completed', {
    },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var self = this;
            var tasksDef = Risk.Models.Task.findAllFinished();
            var view;
            $.when(tasksDef).done(function (tasksRes) {
                tasksRes = self.convertToDates(tasksRes);
                view = $.View('//risk/views/completed/init.ejs', tasksRes);
                $('#CompletedContent').html(view);
                $('#CompletedList').listview();
                $('#CompletedPage').trigger("create");
            });
        },
        '.task-item click': function (el) {
            var id = $(el).attr("id");
            localStorage.taskId = id;
        },
        '.delete click': function (el) {
            var id = $(el).attr("id");
            localStorage.deleteTaskId = id;
        },
        convertToDates: function (list) {
            for (var i = 0; i < list.length; i++) {
                list[i].DateFinished = new Date(list[i].DateFinished);
            }
            return list;
        }
    });
});