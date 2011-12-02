steal('jquery/model', function () {

  Zoladex.Models.WebSqlModel('Zoladex.Models.Practice',
  {
      findAll: function (params) {
          if (params && params.basicdetails) {
              return localStorageDB.getRows('SELECT Name FROM Practices', this);
          }
          return localStorageDB.getRows('SELECT * FROM Practices', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM Practices WHERE Id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      tableName: "Practices"
  },
  {
      FullName: function () {
          return this.Name;
      }
  });
})