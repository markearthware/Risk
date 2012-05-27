steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentWhos',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentWhos', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentWhos WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      findAllById: function (id) {
          var result = localStorageDB.getRows('SELECT * FROM AssessmentWhos WHERE AssessmentId =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM AssessmentWhos WHERE AssessmentId =' + id, this);
          return result;
      },
      
      tableName: "AssessmentWhos"
   },
  {
  });
})