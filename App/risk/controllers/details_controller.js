steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/assessments.js',
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
            var assessmentDetailControlsDef = new Risk.Models.AssessmentDetailControls.findAllById(localStorage.editAssessmentId);
            var view;

            $.when(assessmentDef, assessmentDetailControlsDef).done(function (assessmentRes, assessmentControlsRes) {
                var assessmentRating = assessmentRes.Severity * assessmentRes.Likelihood;
                view = $.View('//risk/views/details/init.ejs', { furtherDetails: assessmentRes.FurtherDetails, assessmentRating: assessmentRating, severityRating: assessmentRes.Severity, likelihoodRating: assessmentRes.Likelihood, hazardName: assessmentRes.Hazard, who: assessmentRes.Who, how: assessmentRes.How, controls: assessmentControlsRes });
                $('#DetailsContent').html(view);
                $('#DetailsList').listview();
                $('#DetailsPage').trigger("create");
            });
        }
    });
    });