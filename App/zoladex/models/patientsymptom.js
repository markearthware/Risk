steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptom',
        {
            findOne: function(id) {
                return localStorageDB.getSingleRow('SELECT * FROM PatientSymptoms WHERE id =' + id, this);
            },

            tableName: "PatientSymptoms"
        }, {
            getFormatedDate: function() {
                var dateObject = new Date(this.Date);
                return dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear();
            }
        })
})