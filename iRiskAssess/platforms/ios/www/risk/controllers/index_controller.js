steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../views/index/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Index', {
        },
    {
        init: function () {
            $.mobile.showPageLoadingMsg();

            localStorage.editAssessmentId = "";
            localStorage.deleteAssessmentId = "";
            localStorage.assessmentId = "";
            localStorage.hazardId = "";
            localStorage.addToExisting = "";
            localStorage.likelihoodRating = "";
            localStorage.severityRating = "";
            localStorage.taskId = "";

            var view = $.View("//risk/views/index/init.ejs");
            $('#indexContent').html(view);
            $('h1').text("iRisk Assess");
            $.mobile.hidePageLoadingMsg();

			setTimeout(
				function(){
				navigator.splashscreen.hide();
			},1500);
        }
    });
    });