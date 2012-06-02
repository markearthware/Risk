steal('jquery/model', function () {

  Risk.Models.WebSqlModel('Risk.Models.AssessmentDetailWhos',
  {
      findAllById: function (id) {
          return localStorageDB.getRows('SELECT Whos.Name as Name FROM AssessmentWhos inner join Whos ON AssessmentWhos.WhoId = Whos.id WHERE AssessmentWhos.AssessmentId = ' + id, this);
      },
      
      tableName: "AssessmentWhos"
   },
  {
  });
})