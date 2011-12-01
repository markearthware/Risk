steal('jquery/model', function () {

    $.Model('Zoladex.Models.Symptom',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT Id, Description, WarningSign FROM Symptoms', this);
      },

      findOne: function (id) {
          //          var result = localStorageDB.getSingleRow('SELECT * FROM HealthcareProfessionals WHERE Id =' + id);
          //          steal.dev.log("result is:");
          //          steal.dev.log(result);
          //          return result;
      },

      create: function (newappointment, success, error) {
          //          return localStorageDB.addAppointment(newappointment, success, error);
      },

      update: function (id, symptom, success, error) {
          return localStorageDB.updateAppointment(symptom, success, error);
      },

      destroy: function (id, success, error) {
          //          return localStorageDB.deleteAppointment(id, success, error);
      },

      buildName: function (appointment) {
          //          return appointment.Title + ' ' + appointment.FirstName + ' ' + appointment.Surname;
      }
  },
  {});
})