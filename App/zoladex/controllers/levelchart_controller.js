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
                    axesDefaults: {
                        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                        tickOptions: {
                            angle: -45,
                            fontSize: '10pt'
                        }
                    },
                    axes: {
                        xaxis: {
                            label: 'Date (day / month / year)',
                            renderer: $.jqplot.DateAxisRenderer,
                            tickOptions: {
                                formatString: '%#d/%m/%y'
                            }
                        },
                        yaxis: {
                            label: 'PSA Level (ng/ml)',
                            min: 0,
                            tickOptions: {
                                angle: 0
                            },
                            labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                            labelOptions : {
                                angle: -90
                            }
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
