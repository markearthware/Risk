steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentExistingControls',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentExistingControls', this);
      },

      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Controls.id as id FROM AssessmentExistingControls inner join Controls ON AssessmentExistingControls.ExistingControlId = Controls.id WHERE AssessmentExistingControls.AssessmentId = ' + id, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentExistingControls WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM AssessmentExistingControls WHERE AssessmentId =' + id, this);
          return result;
      },
      findAllById: function (id) {
          var result = localStorageDB.getRows('SELECT * FROM AssessmentExistingControls WHERE AssessmentId =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      tableName: "AssessmentExistingControls"
   },
  {
  });
})