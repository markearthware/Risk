steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.Email',
  {
      getQueryString: function (taskId) {
          return localStorageDB.getRows('SELECT * FROM Tasks WHERE id ='+taskId, this);
      },
      
      tableName: "Tasks"
   },
  {
  });
})