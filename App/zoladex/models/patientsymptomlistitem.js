steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptomListItem',
  {
    findAll: function () {
        return localStorageDB.getRows('SELECT ps.id, ps.Date, ps.Time,ps.SymptomId, s.Description, s.WarningSign FROM PatientSymptoms as ps INNER JOIN Symptoms as s on ps.SymptomId=s.id', this);
    },
    attributes: {
        Date: 'date'
    },
    convert: {
        date: function (raw) {
            // check if coming from form params or db
            if (typeof raw != "number") {
                return $.scroller.parseDate('dd M yy', raw);
            }
            return new Date(raw);
        }
    }    
  }, {
  });
  })