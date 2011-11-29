steal('jquery/model', function () {

    $.Model('Zoladex.Models.Hcp',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM HealthcareProfessionals');
      },

      findOne: "/recipes/{id}.json",

      create: function (newhcp, success, error) {
          return localStorageDB.addHcp(newhcp, success, error);
      },

      update: "/recipes/{id}.json",

      destroy: "/recipes/{id}.json"
  },
  {});
})