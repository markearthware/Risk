steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Category',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT * FROM Categories', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM Categories WHERE CategoryId =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      tableName: "Categories"
  },
  {
  });
})