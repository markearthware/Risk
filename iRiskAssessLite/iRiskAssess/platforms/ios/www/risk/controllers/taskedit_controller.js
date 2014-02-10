steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/task_edit/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.TaskEdit', {
        },
    {
        task: null,
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            var self = this;
            $.when(taskDef).done(function (taskRes) {
                self.task = taskRes;
                var view = $.View('//risk/views/task_edit/init.ejs', taskRes);
                $('#EditTaskForm').html(view).trigger('create');
            });
        },
        submit: function (el, ev) {
            ev.preventDefault();
            var self = this;
            if ($('#EditTaskForm').valid()) {
                var params = el.formParams();
                var task = { id: self.task.id, Name: params.Name, Site: params.Site, DateStarted: self.task.DateStarted, DateFinished: "", Sent: 0 };
                new Risk.Models.Task(task).save(this.callback('onInsertSuccess'));
            }
            return false;
        },
        onInsertSuccess: function (obj, newid) {
            localStorage.taskId = this.task.id;
            $.mobile.changePage('myassessments.htm', 'pop', false, true);
        }
    });
    });