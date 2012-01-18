steal('jquery/model', function () {

    $.Model('Zoladex.Models.AppointmentListItem',
  {
      findAll: function () {
          var past = new Date();
          past.setDate(past.getDate() - 1);
          return localStorageDB.getRows('SELECT ap.id, ap.StartDateTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap left outer join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left outer join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDateTime > ' + past.getTime() + ' ORDER BY ap.StartDateTime', this);
      },
      attributes: {
          StartDateTime: 'date'
      },
      convert: {
          date: function (raw) {
              return new Date(raw);
          }
      }
  },
      {

  });
})