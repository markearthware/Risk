steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailHows',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Hows.Name as Name FROM AssessmentHows inner join Hows ON AssessmentHows.HowId = Hows.id WHERE AssessmentHows.AssessmentId = ' + id, this);
      },
      
      tableName: "AssessmentHows"
   },
  {
  });
})