steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Hazards',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Hazards', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Hazards WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      deleteOne: function (id) {
          var result = localStorageDB.getSingleRow('DELETE FROM Hazards WHERE id =' + id, this);
          return result;
      },

      tableName: "Hazards"
   },
  {
  });
})