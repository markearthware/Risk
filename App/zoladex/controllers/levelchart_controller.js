steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/psalevel.js',
    '../lib/WebSQL/db.js',
    '../lib/jqPlot/jqplot.js'
    
    )
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

            var series = new Array();

            $.each(data, function () {
                series.push([this.Date, this.PsaLevel]);
            });
            
            $.jqplot('PsaChartContainer', [series], {
                axes: { xaxis: { renderer: $.jqplot.DateAxisRenderer} },
                series: [{ lineWidth: 4, markerOptions: { style: 'square'}}]
            });
        }
    });
});
