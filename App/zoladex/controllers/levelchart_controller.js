steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    '../models/psalevel.js',
    '../lib/highchart/highcharts.js',
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

            var series = this.formatData(data);

            var chart1 = new Highcharts.Chart({
                chart: {
                    renderTo: 'PsaChartContainer',
                    type: 'line'
                },
                title: {
                    text: ''
                },

                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: 'ng/ml'
                    }
                },
                series: [{
                    name: 'PSA Level',
                    data: series
                }]
            });
        },

        formatData: function (data) {
            var series = new Array();

            $.each(data, function (index, element) {
                series.push([element.Date, element.PsaLevel]);
            });

            return series;
        }
    });
    });