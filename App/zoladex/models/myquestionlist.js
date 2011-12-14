steal('jquery/model', function () {

    Zoladex.Models.WebSqlModel('Zoladex.Models.MyQuestionList',
  {
      findAll: function (params) {
          var sql = 'SELECT mq.id,  mq.Question, mq.HcpId, hcp.Title, hcp.FirstName, hcp.Surname FROM MyQuestions as mq inner join HealthcareProfessionals as hcp on mq.HcpId=hcp.id ORDER BY mq.HcpId ASC';
          return localStorageDB.getRows(sql, this);
      },

      findOne: function (id) {

          var result = localStorageDB.getSingleRow('SELECT * FROM MyQuestions WHERE id =' + id, this);
          steal.dev.log("result is:");
          steal.dev.log(result);
          return result;
      },
      tableName: "MyQuestions"
  },
  {
});
})