steal('jquery/model', function () {

    Risk.Models.WebSqlModel('Risk.Models.Assessments',
  {
      findAll: function (taskId) {
          //"SELECT ap.id, ap.StartDateTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap left outer join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left outer join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDateTime > ' + past.getTime() + ' ORDER BY ap.StartDateTime'";
          return localStorageDB.getRows('SELECT ass.id, hz.Name as Hazard FROM Assessments as ass left outer join Hazards as hz on ass.HazardId = hz.Id WHERE ass.TaskId = '+taskId, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Assessments WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "Assessments"
  },
  {
  });
})