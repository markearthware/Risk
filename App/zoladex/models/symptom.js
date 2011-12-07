steal('jquery/model', function () {

    $.Model('Zoladex.Models.Symptom',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT Id, Description, WarningSign FROM Symptoms', this);
      }
  },
  {});
})