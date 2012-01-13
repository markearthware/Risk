steal('jquery/model', function () {

  Zoladex.Models.WebSqlModel('Zoladex.Models.Hcp2',
  {
      findAll: function () {
          return localStorageDB.getRows('SELECT * FROM HealthcareProfessionals', this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT jr.Name, pr.id as PrimaryPracticeId, pr.Name as PrimaryPracticeName, pr.Postcode as PrimaryPracticePostcode, pr2.id as SecondaryPracticeId, pr2.Name as SecondaryPracticeName, pr2.Postcode as SecondaryPracticePostcode, hcp.id, hcp.Title, hcp.FirstName, hcp.Surname, hcp.Telephone, hcp.Email, hcp.Notes FROM HealthcareProfessionals as hcp left outer join JobRoles as jr on hcp.JobRole = jr.id left outer join Practices as pr on hcp.PrimaryPracticeId = pr.id left outer join Practices as pr2 on hcp.SecondaryPracticeId = pr2.id WHERE hcp.id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      
       tableName: "HealthcareProfessionals"
  },
  { 
      FullName: function () {
        return this.Title + ' ' + this.FirstName + ' ' + this.Surname;
      } 
  });
})