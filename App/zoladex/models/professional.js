steal('jquery/model', function () {

    $.Model('Zoladex.Models.Professional',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM HealthcareProfessionals');
      },

      findOne: "/recipes/{id}.json",
      
      create: function (newhcp) {
          return localStorageDB.addHcp(newhcp);
      },

      update: "/recipes/{id}.json",
      
      destroy: "/recipes/{id}.json"
  },
  {});
})