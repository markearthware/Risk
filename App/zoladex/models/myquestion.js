steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.MyQuestion',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT * FROM MyQuestions', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM MyQuestions WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "MyQuestions"
  },
  {
  });
})