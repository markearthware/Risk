steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptom',
        {
            findOne: function(id) {
                return localStorageDB.getSingleRow('SELECT * FROM PatientSymptoms WHERE id =' + id, this);
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
            },
            tableName: "PatientSymptoms"
        }, 
        {
        });
})