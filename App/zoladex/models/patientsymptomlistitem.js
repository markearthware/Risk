steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptomListItem',
  {
    findAll: function () {
        return localStorageDB.getRows('SELECT ps.id, ps.DateTime, ps.SymptomId, s.Description, s.WarningSign FROM PatientSymptoms as ps INNER JOIN Symptoms as s on ps.SymptomId=s.id ORDER BY ps.DateTime DESC', this);
    },
    attributes: {
        DateTime: 'date'
    },
    convert: {
        date: function (raw) {
            // check if coming from form params or db
            if (typeof raw == "number") {
                return new Date(raw);
            }

            return parseInt(raw); //convert number from form string
        }
    }    
  }, {
  });
  })