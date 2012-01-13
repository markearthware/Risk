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

            if (data.length > 1) {
                var series = new Array();

                $.each(data, function () {
                    series.push([this.Date, this.PsaLevel]);
                });

                $.jqplot('PsaChartContainer', [series], {
                    axes: {
                        xaxis: {
                            label: 'Date',
                            renderer: $.jqplot.DateAxisRenderer
                        },
                        yaxis: {
                            label: 'PSA Level (ng/ml)'
                        }
                    },
                    series: [{ lineWidth: 4, markerOptions: { style: 'square'}}]
                });
            }
            else {
                $('#PsaChartContainer').append("The graph will be presented when you have recorded your PSA level more than once, click new to record your latest PSA level");
            }
        }
    });
});
