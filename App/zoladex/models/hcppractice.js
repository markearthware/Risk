steal('jquery/model', function () {

  Zoladex.Models.WebSqlModel('Zoladex.Models.HcpPractice',
  {
      findAll: function (id) {

          var result = localStorageDB.getRows('SELECT * FROM HcpPractices WHERE Id =' + id, this);
          return result;
      },

      destroyByHcpId: function (id) {

          var result = localStorageDB.getRows('DELETE FROM HcpPractices WHERE HcpId =' + id, this);
          return result;
      },

      tableName: "HcpPractices"
  },
  {
  });
})