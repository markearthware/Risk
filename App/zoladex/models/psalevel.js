steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.Psalevel',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM PsaLevels ORDER BY Date DESC', this);
      },

      findOne: function (id) {
          var result = localStorageDB.getSingleRow('SELECT * FROM PsaLevels WHERE id =' + id, this);
          return result;
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
      tableName: "PsaLevels"


  },
      {


      });
})