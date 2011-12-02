steal('jquery/model', function () {

  $.Model('Zoladex.Models.AppointmentListItem',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT ap.StartDate, ap.StartTime, ap.TypeId hcp.Title, hcp.FirstName, hcp.Surname, hcl.Name FROM Appointments as ap inner join HealthcareProfessionals as ap.hcp on HcpId=hcp.ID inner join HealthcareLocations as hcl on ap.LocationId = hcl.Id', this);
      }

    },
      {
   

      });
})