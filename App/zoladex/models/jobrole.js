steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.JobRole',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * from JobRoles', this);
      },
      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM JobRoles WHERE id =' + id, this);
          return result;
      },
    tableName: "JobRoles"


    },
    {
    
    });
})