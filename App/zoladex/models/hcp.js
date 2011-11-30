steal('jquery/model', function () {

    $.Model('Zoladex.Models.Hcp',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM HealthcareProfessionals');
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM HealthcareProfessionals WHERE Id =' + id);
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

      destroy: "/recipes/{id}.json",

      buildName: function (hcp) {
          return hcp.Title + ' ' + hcp.FirstName + ' ' + hcp.Surname;
      }
  },
  {});
})