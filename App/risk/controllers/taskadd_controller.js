steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/task.js',
    '../lib/WebSQL/db.js',
    '../views/task_add/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Task', {
        },
    {
        init: function () {
            this.loadData();
        },

        loadData: function () {

            var view = $.View('//risk/views/task_add/init.ejs');
            $('#NewTaskForm').html(view).trigger('create');
        },

        submit: function (el, ev) {

            ev.preventDefault();

            if ($('#NewTaskForm').valid()) {

                var params = el.formParams();

                var task = { Name: params.Name, Site: params.Site, DateStarted: new Date().getTime(), DateFinished: "", Sent: 0 };

                new Risk.Models.Task(task).save(this.callback('onInsertSuccess'), this.callback('onInsertFail'));
            }
            return false;
        },
        onInsertSuccess: function (obj, newid) {
            
            localStorage.taskId = newid;
            $.mobile.changePage('hazards.htm', 'pop', false, true);
        },

        onInsertFail: function () {
            //$.mobile.changePage('dialog/error.htm', 'pop', false, true);
        }
    });
    });