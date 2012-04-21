steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Task',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Tasks', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Tasks WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "Tasks"
   },
  {
  });
})