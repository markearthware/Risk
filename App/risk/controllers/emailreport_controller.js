steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../lib/WebSQL/db.js',
    '../models/task.js',
    '../models/assessments.js',
    '../views/email/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.EmailReport', {
        },
    {
        init: function () {
            this.loadData();
        },

        task: null,

        loadData: function () {
            var self = this;
            var taskDef = Risk.Models.Task.findOne(localStorage.taskId);
            $.when(taskDef).done(function (taskRes) {
                self.task = taskRes;
                var emailDetails = { FirstName: localStorage.emailDetailsFn, LastName: localStorage.emailDetailsLn, EmailAddress: localStorage.emailDetailsEmail, ManagerFirstName: localStorage.emailDetailsMfn, ManagerLastName: localStorage.emailDetailsMln, ManagerEmailAddress: localStorage.emailDetailsMemail };
                var view = $.View('//risk/views/email/init.ejs', emailDetails);
                $('#EmailReportForm').html(view).trigger('create');
                $('h1#EmailTitle').append(": " + taskRes.Name);
            });
        },

        submit: function (el, ev) {
            $.mobile.showPageLoadingMsg();
            var self = this;
            ev.preventDefault();
            if ($('#EmailReportForm').valid()) {
                var params = el.formParams();
                var emailDetails = { FirstName: params.FirstName, LastName: params.LastName, EmailAddress: params.EmailAddress, ManagerFirstName: params.ManagerFirstName, ManagerLastName: params.ManagerLastName, ManagerEmailAddress: params.ManagerEmailAddress };
                localStorage.emailDetailsFn = emailDetails.FirstName;
                localStorage.emailDetailsLn = emailDetails.LastName;
                localStorage.emailDetailsEmail = emailDetails.EmailAddress;
                localStorage.emailDetailsMfn = emailDetails.ManagerFirstName;
                localStorage.emailDetailsMln = emailDetails.ManagerLastName;
                localStorage.emailDetailsMemail = emailDetails.ManagerEmailAddress;

                var task = {
                    id: self.task.id,
                    Name: self.task.Name,
                    DateStarted: new Date(self.task.DateStarted).toISOString(),
                    DateFinished: new Date().toISOString(),
                    Sent: 1,
                    AssessorName: params.FirstName + " " + params.LastName,
                    AssessorEmail: params.EmailAddress,
                    ManagerName: params.ManagerFirstName + " " + params.ManagerLastName,
                    ManagerEmail: params.ManagerEmailAddress
                };

                var assessments;
                var assessmentsDef = Risk.Models.Assessments.findAll(self.task.id);
                $.when(assessmentsDef).done(function (assessmentsRes) {
                    assessments = assessmentsRes;
                    var serialisedTask = $.param({ task: task, assessments: JSON.stringify(assessments) });
                    $.ajax({
                        url: 'http://localhost:52068/api/Email/Send?' + serialisedTask,
                        dataType: 'jsonp',
                        success: function (data) {
                            new Risk.Models.Task(task).save(function () {
                                $.mobile.changePage("dialog/emailSent.htm");
                            });
                        },
                        error: function (err) {
                            console.log(err);
                            $.mobile.changePage("dialog/emailNotSent.htm");
                        }
                    });
                });
            }
            return false;
        }
    });
    });