steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Group',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM Groups', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM Groups WHERE Id =' + id, this);
          return result;
      },

      tableName: "Groups"
  },
  {
  });
})