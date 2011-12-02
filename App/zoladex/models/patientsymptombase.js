steal('jquery/model', function () {
    Zoladex.Models.WebSqlModel('Zoladex.Models.PatientSymptomBase',
      {
          tableName: "PatientSymptoms"
      }, 
    {
      getFormatedDate: function () {
          var dateObject = new Date(this.Date);
          return dateObject.getDate() + '/' + dateObject.getMonth() + '/' + dateObject.getFullYear();
      },
      getFormatedTime: function () {
          var dateObject = new Date(this.Time);
          var minutes = dateObject.getUTCMinutes();
          if (minutes < 10)
              minutes = "0" + minutes;
          return dateObject.getHours() + ':' + minutes;
      }
  });
})