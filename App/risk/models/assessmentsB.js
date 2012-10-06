steal('jquery/model', function () {

    Risk.Models.WebSqlModel('Risk.Models.AssessmentsB',
  {
      findAll: function (taskId) {
          //"SELECT ap.id, ap.StartDateTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap left outer join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left outer join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDateTime > ' + past.getTime() + ' ORDER BY ap.StartDateTime'";
          return localStorageDB.getRows('SELECT ass.id, hz.Name as Hazard FROM Assessments as ass left outer join Hazards as hz on ass.HazardId = hz.Id WHERE ass.TaskId = '+taskId, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT ass.id, ass.TaskId, ass.FurtherDetails, ass.Likelihood, ass.Severity, ass.LikelihoodB, ass.SeverityB, h.Name as How, w.Name as Who, h.id as HowId, w.id as WhoId, hz.Name as Hazard FROM Assessments as ass inner join Hazards as hz on ass.HazardId = hz.Id inner join Whos as w on ass.WhoId = w.id inner join Hows as h on ass.HowId = h.id WHERE ass.id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "Assessments"
  },
  {
  });
})