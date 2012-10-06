steal('jquery/model', function () {

    Risk.Models.WebSqlModel('Risk.Models.Assessments',
  {
      findAll: function (taskId) {
          //"SELECT ap.id, ap.StartDateTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap left outer join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left outer join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDateTime > ' + past.getTime() + ' ORDER BY ap.StartDateTime'";
          return localStorageDB.getRows('SELECT REPLACE(REPLACE(GROUP_CONCAT(DISTINCT REPLACE(c.Name,",","@")),",","|"),"@",",") as Controls, REPLACE(REPLACE(GROUP_CONCAT(DISTINCT REPLACE(cc.Name,",","@")),",","|"),"@",",") as ExistingControls, ass.id, ass.TaskId, ass.Likelihood, ass.Severity, ass.LikelihoodB, ass.SeverityB, ass.FurtherDetails, h.Name as How, w.Name as Who, h.id as HowId, w.id as WhoId, hz.Name as Hazard FROM Assessments as ass inner join Hazards as hz on ass.HazardId = hz.Id inner join Whos as w on ass.WhoId = w.id inner join Hows as h on ass.HowId = h.id left join AssessmentControls ac on ac.AssessmentId = ass.id left join AssessmentExistingControls aec on aec.AssessmentId = ass.id left join Controls as c on c.id = ac.ControlId left join Controls as cc on cc.id = aec.ExistingControlId WHERE ass.TaskId = ' + taskId + ' GROUP BY ass.id, ass.TaskId, ass.Likelihood, ass.Severity, ass.LikelihoodB, ass.SeverityB, ass.FurtherDetails, h.Name, w.Name, h.id, w.id, hz.Name', this);
      },
      
      findAllIds: function (taskId) {
          return localStorageDB.getRows('SELECT ass.id FROM Assessments as ass WHERE ass.TaskId = ' + taskId, this);
      },
      
      findAllHazardIds: function (hazardId) {
          return localStorageDB.getRows('SELECT ass.id FROM Assessments as ass WHERE ass.HazardId = ' + hazardId, this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT ass.id, ass.TaskId, ass.FurtherDetails, ass.Likelihood, ass.Severity, ass.LikelihoodB, ass.SeverityB, h.Name as How, w.Name as Who, h.id as HowId, w.id as WhoId, hz.Name as Hazard, hz.id as HazardId FROM Assessments as ass inner join Hazards as hz on ass.HazardId = hz.Id inner join Whos as w on ass.WhoId = w.id inner join Hows as h on ass.HowId = h.id WHERE ass.id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      deleteOne: function (id) {
          var result = localStorageDB.getSingleRow('DELETE FROM Assessments WHERE id =' + id, this);
          return result;
      },

      deleteManyByHazardId: function (id) {
          var result = localStorageDB.getRows('DELETE FROM Assessments WHERE HazardId =' + id, this);
          return result;
      },

      tableName: "Assessments"
  },
  {
});
})