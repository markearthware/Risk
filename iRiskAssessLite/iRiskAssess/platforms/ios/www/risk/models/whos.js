steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Whos',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Whos', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Whos WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "Whos"
   },
  {
  });
})