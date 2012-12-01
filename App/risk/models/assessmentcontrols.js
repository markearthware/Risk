steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentControls',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentControls', this);
      },

      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Controls.id as id FROM AssessmentControls inner join Controls ON AssessmentControls.ControlId = Controls.id WHERE AssessmentControls.AssessmentId = ' + id, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentControls WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM AssessmentControls WHERE AssessmentId =' + id, this);
          return result;
      },
      findAllById: function (id) {
          var result = localStorageDB.getRows('SELECT * FROM AssessmentControls WHERE AssessmentId =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      
      tableName: "AssessmentControls"
   },
  {
  });
})