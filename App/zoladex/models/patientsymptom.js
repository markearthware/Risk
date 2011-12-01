steal('jquery/model', function () {

    $.Model('Zoladex.Models.PatientSymptom',
  {
      attributes: {
          Date: 'date',
          Time: 'time',
          WarningSign: 'warning'
      },

      convert: {
          date: function (raw) {
              var dateObject = new Date(raw);
              return dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear();
          },
          time: function (raw) {
              var dateObject = new Date(raw);
              var minutes = dateObject.getUTCMinutes();
              if (minutes < 10)
                  minutes = "0" + minutes;
              return dateObject.getHours() + ':' + minutes;
          },
          warning: function (raw) {
              if (raw) {
                  return "Yes";
              }
              return "No";
          }
      },

      findAll: function (params) {
          return localStorageDB.getRows('SELECT ps.Date, ps.Time, s.Description, s.WarningSign FROM PatientSymptoms as ps INNER JOIN Symptoms as s on SymptomId=s.Id', this);
      },

      findOne: function (id) {
          //          var result = localStorageDB.getSingleRow('SELECT * FROM HealthcareProfessionals WHERE Id =' + id);
          //          steal.dev.log("result is:");
          //          steal.dev.log(result);
          //          return result;
      },

      create: function (newappointment, success, error) {
          //          return localStorageDB.addAppointment(newappointment, success, error);
      },

      update: function (id, appointment, success, error) {
          //          return localStorageDB.updateAppointment(appointment, success, error);
      },

      destroy: function (id, success, error) {
          //          return localStorageDB.deleteAppointment(id, success, error);
      },

      buildName: function (appointment) {
          //          return appointment.Title + ' ' + appointment.FirstName + ' ' + appointment.Surname;
      }
  },
  {});
})