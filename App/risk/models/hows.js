steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Hows',
  {
      findAll: function (id) {
          return localStorageDB.getRows('SELECT * FROM Hows WHERE HazardId =' + id, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Hows WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      deleteMany: function (id) {
          var result = localStorageDB.getRows('DELETE FROM Hows WHERE HazardId =' + id, this);
          return result;
      },

      tableName: "Hows"
   },
  {
  });
})