steal('jquery/model', function () {

  Zoladex.Models.WebSqlModel('Zoladex.Models.Appointment',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT ap.StartDate, ap.StartTime, ap.TypeId hcp.Title, hcp.FirstName, hcp.Surname, hcl.Name FROM Appointments as ap inner join HealthcareProfessionals as ap.hcp on HcpId=hcp.ID inner join HealthcareLocations as hcl on ap.LocationId = hcl.Id', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Appointments WHERE Id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      tableName: "Appointments",

      buildName: function (appointment) {
          return appointment.Title + ' ' + appointment.FirstName + ' ' + appointment.Surname;
      }
  },
  {});
})