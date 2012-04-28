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
      tableName: "AssessmentWhos"
   },
  {
  });
})