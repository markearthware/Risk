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
                var emailDetails = { FirstName: localStorage.emailDetailsFn, LastName: localStorage.emailDetailsLn, EmailAddress: localStorage.emailDetailsEmail, ManagerEmailAddress: localStorage.emailDetailsMemail };
                var view = $.View('//risk/views/email/init.ejs', emailDetails);
                $('#EmailReportForm').html(view).trigger('create');
                $('h1#EmailTitle').append(": " + taskRes.Name);
            });
        },

        submit: function (el, ev) {
			if ($('#EmailReportForm').valid()) {
				$.mobile.showPageLoadingMsg();
				var self = this;
				ev.preventDefault();
				var params = el.formParams();
				var emailDetails = { FirstName: params.FirstName, LastName: params.LastName, EmailAddress: params.EmailAddress, ManagerEmailAddress: params.ManagerEmailAddress };
				localStorage.emailDetailsFn = emailDetails.FirstName;
				localStorage.emailDetailsLn = emailDetails.LastName;
				localStorage.emailDetailsEmail = emailDetails.EmailAddress;
				localStorage.emailDetailsMemail = emailDetails.ManagerEmailAddress;

				var task = {
					id: self.task.id,
					Name: self.task.Name,
					Site: self.task.Site,
					DateStarted: new Date(self.task.DateStarted).toISOString(),
					DateFinished: new Date().getTime(),
					Sent: 1,
					AssessorName: params.FirstName + " " + params.LastName,
					AssessorEmail: params.EmailAddress,
					ManagerEmail: params.ManagerEmailAddress
				};
				var assessmentsDef = Risk.Models.Assessments.findAll(self.task.id);
				$.when(assessmentsDef).done(function (assessmentsRes) {
					var assessments = [];
					for (var index = 0; index < assessmentsRes.length; index++) {
						assessments.push({
								hazard: assessmentsRes[index].Hazard,
								likelihood: assessmentsRes[index].Likelihood,
								severity: assessmentsRes[index].Severity,
								likelihoodB: assessmentsRes[index].LikelihoodB,
								severityB: assessmentsRes[index].SeverityB,
								how: assessmentsRes[index].How,
								who: assessmentsRes[index].Who,
								furtherDetails: assessmentsRes[index].FurtherDetails,
								controls: assessmentsRes[index].Controls,
								existingControls: assessmentsRes[index].ExistingControls
							});
					}
					$.ajax({
					    url: 'http://eriskservice.apphb.com/api/Email/Send',
						dataType: 'jsonp',
						data: {
							task: task,
							assessments: assessments
						},
						success: function () {},
						error: function (a) {
							if (a.status == 200) {
								new Risk.Models.Task(task).save(function () {
									$.mobile.changePage("dialog/emailSent.htm");
								});
							}
							else {
								$.mobile.changePage("dialog/emailNotSent.htm");
							}
						}
					});
				});
			}
			return false;
        }
    });
    });