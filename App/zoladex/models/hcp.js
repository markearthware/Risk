steal('jquery/model', function () {

    $.Model('Zoladex.Models.Hcp',
  {
      findAll: function (params) {
          if (params && params.basicdetails) {
              return localStorageDB.getRows('SELECT Title, Firstname, Surname FROM HealthcareProfessionals',this);
          }
          return localStorageDB.getRows('SELECT * FROM HealthcareProfessionals', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM HealthcareProfessionals WHERE Id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      create: function (newhcp, success, error) {
          return localStorageDB.addHcp(newhcp, success, error);
      },

      update: function (id, hcp, success, error) {
          return localStorageDB.updateHcp(hcp, success, error);
      },

      destroy: function (id, success, error) {
          return localStorageDB.deleteHcp(id, success, error);
      }

  },
  { 
      FullName: function () {
        return this.Title + ' ' + this.FirstName + ' ' + this.Surname;
      } 
  });
})