steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/hazards.js',
    '../models/assessments.js',
    '../models/assessmentdetailcontrols.js',
    '../models/assessmentdetailexistingcontrols.js',
    '../lib/WebSQL/db.js',
    '../views/completeddetails/init.ejs')
    .then(function ($) {
        $.Controller('Risk.Controllers.CompletedDetails', {
        },
    {
        init: function () {
            this.loadData();
        },
        loadData: function () {
            var assessmentDef = new Risk.Models.Assessments.findOne(localStorage.editAssessmentId);
            var assessmentDetailControlsDef = new Risk.Models.AssessmentDetailControls.findAllById(localStorage.editAssessmentId);
            var assessmentDetailExistingControlsDef = new Risk.Models.AssessmentDetailExistingControls.findAllById(localStorage.editAssessmentId);
            var view;

            $.when(assessmentDef, assessmentDetailControlsDef, assessmentDetailExistingControlsDef).done(function (assessmentRes, assessmentControlsRes, assessmentExistingControlsRes) {
                var assessmentRating = parseInt(assessmentRes.SeverityB * assessmentRes.LikelihoodB);
                var className = "";
                if (assessmentRating < 5) {
                    className = "green-divider";
                }
                else {
                    className = "orange-divider";
                }
                view = $.View('//risk/views/completeddetails/init.ejs', { furtherDetails: assessmentRes.FurtherDetails, assessmentRating: assessmentRating, severityRating: assessmentRes.SeverityB, likelihoodRating: assessmentRes.LikelihoodB, hazardName: assessmentRes.Hazard, who: assessmentRes.Who, how: assessmentRes.How, controls: assessmentControlsRes, existingControls: assessmentExistingControlsRes, className: className });
                $('#CompletedDetailsContent').html(view);
                $('#CompletedDetailsList').listview();
                $('#CompletedDetailsPage').trigger("create");
            });
        }
    });
    });