steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Assessments',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Assessments', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Assessments WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "Assessments"
   },
  {
  });
})