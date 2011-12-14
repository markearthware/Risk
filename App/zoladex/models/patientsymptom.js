steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptom',
        {
            findOne: function(id) {
                return localStorageDB.getSingleRow('SELECT * FROM PatientSymptoms WHERE id =' + id, this);
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
            },
            tableName: "PatientSymptoms"
        }, 
        {
        });
})