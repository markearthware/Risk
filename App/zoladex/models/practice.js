steal('jquery/model', function () {

    $.Model('Zoladex.Models.Practice',
  {
      findAll: function (params) {
          if (params && params.basicdetails) {
              return localStorageDB.getRows('SELECT Name FROM Practices', this);
          }
          return localStorageDB.getRows('SELECT * FROM Practices', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM Practices WHERE Id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },

      create: function (newpractice, success, error) {
          return localStorageDB.addPractice(newpractice, success, error);
      },

      update: function (id, practice, success, error) {
          return localStorageDB.updatePractice(practice, success, error);
      },

      destroy: function (id, success, error) {
          return localStorageDB.deletePractice(id, success, error);
      }

  },
  {
      FullName: function () {
          return this.Name;
      }
  });
})