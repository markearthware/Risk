steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptom',
  {
//      attributes: {
//          Date: 'date',
//          Time: 'time',
//          WarningSign: 'warning'
//      },

      convert: {
          warning: function (raw) {
              if (raw) {
                  return "Yes";
              }
              return "No";
          }
      },

      findAll: function (params) {
          return localStorageDB.getRows('SELECT ps.Id, ps.Date, ps.Time, s.Description, s.WarningSign FROM PatientSymptoms as ps INNER JOIN Symptoms as s on SymptomId=s.Id', this);
      },

      findOne: function (id) {
          return localStorageDB.getSingleRow('SELECT * FROM PatientSymptoms WHERE Id =' + id, this);
      },
      

      
      tableName: "Patient Symptom"
  }, {
        getFormatedDate: function() {
          var dateObject = new Date(this.Date);
          return dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear();
      },
        getFormatedTime: function() {
          var dateObject = new Date(this.Time);
          var minutes = dateObject.getUTCMinutes();
          if (minutes < 10)
              minutes = "0" + minutes;
          return dateObject.getHours() + ':' + minutes;
      }
  });
})