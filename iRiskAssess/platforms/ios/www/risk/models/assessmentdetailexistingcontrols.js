steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailExistingControls',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Controls.Name as Name FROM AssessmentExistingControls inner join Controls ON AssessmentExistingControls.ExistingControlId = Controls.id WHERE AssessmentExistingControls.AssessmentId = ' + id, this);
      },

      tableName: "AssessmentExistingControls"
   },
  {
  });
})