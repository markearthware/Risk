steal('jquery/model', function () {

    $.Model('Zoladex.Models.Appointment',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT ap.StartDate, ap.StartTime, ap.TypeId hcp.Title, hcp.FirstName, hcp.Surname, hcl.Name FROM Appointments as ap inner join HealthcareProfessionals as ap.hcp on HcpId=hcp.ID inner join HealthcareLocations as hcl on ap.LocationId = hcl.Id');
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM HealthcareProfessionals WHERE Id =' + id);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      create: function (newappointment, success, error) {
          return localStorageDB.addAppointment(newappointment, success, error);
      },

      update: function (id, appointment, success, error) {
          return localStorageDB.updateAppointment(appointment, success, error);
      },

      destroy: function (id, success, error) {
          return localStorageDB.deleteAppointment(id, success, error);
      },

      buildName: function (appointment) {
          return appointment.Title + ' ' + appointment.FirstName + ' ' + appointment.Surname;
      }
  },
  {});
})