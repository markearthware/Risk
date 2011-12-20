steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/psalevel.js',
    '../lib/WebSQL/db.js')
    .then(function ($) {
        $.Controller('Zoladex.Controllers.LevelChart', {
        },
    {
        init: function () {

            $.mobile.showPageLoadingMsg();

            //load data
            new Zoladex.Models.Psalevel.findAll().done(this.callback('onDataLoad'));
        },
        onDataLoad: function (data) {
            steal.dev.log(data);

            var series = new Array();
            var labels = new Array();

            $.each(data, function (index, element) {
                series.push(element.PsaLevel);
                labels.push(element.Date);
            });
            
            zingchart.render({
                id : 'PsaChartContainer',
                output : 'canvas',
                width : 320,
                height : 320,
                data : {
                    "graphset": [
                      {
                          "type" : "line",
                          "scale-x" : {
                              "values" : labels
                          }, 
                          "series" : [
                         {
                             "values": series
                         }]
                      }]
                }
            });
        }
    });
});
