steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailControls',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Controls.Name as Name FROM AssessmentControls inner join Controls ON AssessmentControls.ControlId = Controls.id WHERE AssessmentControls.AssessmentId = ' + id, this);
      },

      tableName: "AssessmentControls"
   },
  {
  });
})