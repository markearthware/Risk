steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Symptom',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT id, Description, WarningSign FROM Symptoms', this);
      },
      
      tableName: "Symptoms"
  },
  {});
})