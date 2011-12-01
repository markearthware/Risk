steal('jquery/model', function () {

    $.Model('Zoladex.Models.AppointmentType',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * from AppointmentTypes', this);
      }
  },
  {});
})