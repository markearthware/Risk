steal('jquery/model', function () {

  Zoladex.Models.WebSqlModel('Zoladex.Models.Hcp',
  {
      findAll: function (params) {
          if (params && params.basicdetails) {
              return localStorageDB.getRows('SELECT Title, Firstname, Surname FROM HealthcareProfessionals',this);
          }
          return localStorageDB.getRows('SELECT * FROM HealthcareProfessionals', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM HealthcareProfessionals WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      
       tableName: "HealthcareProfessionals"
  },
  { 
      FullName: function () {
        return this.Title + ' ' + this.FirstName + ' ' + this.Surname;
      } 
  });
})