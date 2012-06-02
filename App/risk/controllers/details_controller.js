steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/assessments.js',
    '../models/assessmentdetailwhos.js',
    '../models/assessmentdetailhows.js',
    '../models/assessmentdetailcontrols.js',
    '../lib/WebSQL/db.js',
    '../views/details/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.Details', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var assessmentDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);
            var assessmentDetailWhosDef = new Risk.Models.AssessmentDetailWhos.findAllById(localStorage.editAssessmentId);
            var assessmentDetailHowsDef = new Risk.Models.AssessmentDetailHows.findAllById(localStorage.editAssessmentId);
            var assessmentDetailControlsDef = new Risk.Models.AssessmentDetailControls.findAllById(localStorage.editAssessmentId);
            var hazardDef = new Risk.Models.Hazards.findOne(localStorage.hazardId);
            var view;

            $.when(assessmentDef, hazardDef, assessmentDetailWhosDef, assessmentDetailHowsDef, assessmentDetailControlsDef).done(function (assessmentRes, hazardRes, assessmentWhosRes, assessmentHowsRes, assessmentControlsRes) {
                var assessmentRating = assessmentRes.Severity * assessmentRes.Likelihood;
                view = $.View('//risk/views/details/init.ejs', { assessmentRating: assessmentRating, severityRating: assessmentRes.Severity, likelihoodRating: assessmentRes.Likelihood, hazardName: hazardRes.Name, whos: assessmentWhosRes, hows: assessmentHowsRes, controls: assessmentControlsRes });
                $('#DetailsContent').html(view);
                $('#DetailsList').listview();
                $('#DetailsPage').trigger("create");
            });
        }
    });
    });