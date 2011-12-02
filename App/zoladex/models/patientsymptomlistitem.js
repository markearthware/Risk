steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptomListItem',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT ps.id, ps.Date, ps.Time,ps.SymptomId, s.Description, s.WarningSign FROM PatientSymptoms as ps INNER JOIN Symptoms as s on ps.SymptomId=s.id', this);
      }
  }, {
      getFormatedDate: function () {
          var dateObject = new Date(this.Date);
          return dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear();
      }
  });
  })