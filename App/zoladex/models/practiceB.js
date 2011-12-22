steal('jquery/model', function () {

  Zoladex.Models.WebSqlModel('Zoladex.Models.PracticeB',
  {
      findAll: function (params) {
          if (params && params.basicdetails) {
              return localStorageDB.getRows('SELECT Name FROM Practices', this);
          }
          else if(params && params.hcpid) {
              return localStorageDB.getRows('SELECT * FROM Practices as p inner join HcpPractices as hp where p.id = hp.PracticeId AND hp.HcpId = '+params.hcpid, this);
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