steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Appointment',
  {
      findAll: function (params) {
          return localStorageDB.getRows('SELECT ap.StartDate, ap.StartTime, ap.TypeId hcp.Title, hcp.FirstName, hcp.Surname, hcl.Name FROM Appointments as ap inner join HealthcareProfessionals as ap.hcp on HcpId=hcp.id inner join Practices as hcl on ap.LocationId = hcl.id', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM Appointments WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
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