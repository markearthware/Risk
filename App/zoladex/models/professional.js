steal('jquery/model', function () {

    $.Model('Zoladex.Models.Professional',
  {
      findAll: function () {
          return localStorageDB.readDB('SELECT * FROM HealthcareProfessionals');
      },
      findOne: "/recipes/{id}.json",
      create: "/recipes.json",
      update: "/recipes/{id}.json",
      destroy: "/recipes/{id}.json"
  },
  {});
})