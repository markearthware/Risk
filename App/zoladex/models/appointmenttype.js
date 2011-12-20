steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.AppointmentType',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * from AppointmentTypes', this);
      },
    tableName: "AppointmentTypes"


    },
    {
    
    });
})