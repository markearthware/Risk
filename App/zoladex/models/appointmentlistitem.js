steal('jquery/model', function () {

  $.Model('Zoladex.Models.AppointmentListItem',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT ap.id, ap.StartDate, ap.StartTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap inner join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left join Practices as hcl on ap.HealthcareLocationId = hcl.id', this);
      }

    },
      {
        getFormatedDate: function() {
          var dateObject = new Date(this.StartDate);
          return dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear();
        }

      });
})