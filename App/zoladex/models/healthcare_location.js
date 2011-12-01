steal('jquery/model', function () {

    $.Model('Zoladex.Models.HealthcareLocation',
  {
      findAll: function () {
          // TODO might need to have a param to optionaly return less fields when needed
          return localStorageDB.getRows('SELECT * from HealthcareLocations', this);
      },

      findOne: function (id) {

      },

      create: function (newloc, success, error) {

      },

      update: function (id, newloc, success, error) {

      },

      destroy: function (id, success, error) {
        
      }
  },
  {});
})