steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Alert',
  {
      findAll: function (params) {
          var today = new Date();
          var tomorrow = new Date();
          tomorrow.setDate(today.getDate() + 1);
          //var sql = 'SELECT ap.StartDate, ap.StartTime, ap.TypeId, hcp.Title, hcp.FirstName, hcp.Surname, hcl.Name FROM Appointments as ap inner join HealthcareProfessionals as hcp on ap.HcpId=hcp.id inner join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDate < ' + tomorrow.getTime() + ' AND ap.StartDate > ' + today.getTime() + ' AND ap.AlertsEnabled = 1';
           var sql = 'SELECT ap.id, ap.StartDate, ap.StartTime, ap.TypeId, apt.Name as TypeName, hcp.Title as HcpTitle, hcp.FirstName as HcpFirstName, hcp.Surname as HcpSurname, hcl.Name as LocationName FROM Appointments as ap inner join AppointmentTypes as apt on ap.TypeId = apt.id left join HealthcareProfessionals as hcp on ap.HcpId=hcp.id left join Practices as hcl on ap.HealthcareLocationId = hcl.id WHERE ap.StartDate < ' + tomorrow.getTime() + ' AND ap.StartDate > ' + today.getTime() + ' AND ap.AlertsEnabled = 1';
          console.log(sql);
          return localStorageDB.getRows(sql, this);
      },
      attributes: {
          StartDate: 'date'
      },
      convert: {
          date: function (raw) {
              // check if coming from form params or db
              if (typeof raw != "number") {
                  return $.scroller.parseDate('dd M yy', raw);
              }
              return new Date(raw);
          }
      },
      tableName: "Appointments"
  },
      {


  });
})