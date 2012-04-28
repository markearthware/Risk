steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentHows',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM AssessmentHows', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM AssessmentHows WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "AssessmentHows"
   },
  {
  });
})