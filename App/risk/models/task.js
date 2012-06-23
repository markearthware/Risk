steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Task',
  {
      findAllInProgress: function () {
          return localStorageDB.getRows('SELECT * FROM Tasks WHERE Sent = 0 ORDER BY DateStarted DESC', this);
      },

      findAllFinished: function () {
          return localStorageDB.getRows('SELECT * FROM Tasks WHERE Sent = 1', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Tasks WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      
      deleteOne: function (id) {
          var result = localStorageDB.getSingleRow('DELETE FROM Tasks WHERE id =' + id, this);
          return result;
      },
      
      tableName: "Tasks"
   },
  {
  });
})