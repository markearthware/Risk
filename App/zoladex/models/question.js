steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Question',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT * FROM Questions', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM Questions WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      findByCategory: function (catid) {

          var result = localStorageDB.getRows('SELECT * FROM Questions WHERE CategoryId =' + catid, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      tableName: "Questions"
  },
  {
  });
})