﻿define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge"; var domains = require('domains');
    var $ = require("jquery");
    require('core-css');
    require('theme-css');
    require('datepicker-css');
    require('jquery.ui.core')($);
    require('jquery.ui.widget')($);
    require('jquery.ui.datepicker')($);
    require('datepicker-zh-CN')($);
    require("highcharts")($);
    require("exporting")(window.Highcharts);
    var init = function () {
        var categories = [], series=[];
        for (var i in global_setting.series) {
            categories.push(global_setting.series[i].username);
            series.push(global_setting.series[i].data-0);
        }
        var _title = ($(".s_date").val() || "最早") + " 至 " + ($(".e_date").val() || "今天 ");
        $(".s_date").datepicker({
            onClose: function (data, e) { if (!(/\d{4}-\d{2}-\d{2}/.test(data))) { e.input.val(''); } }
        });
        $(".e_date").datepicker({
            maxDate: new Date(),
            onClose: function (data, e) { if (!(/\d{4}-\d{2}-\d{2}/.test(data))) { e.input.val(''); } }
        });
        $('.statistics_box').highcharts({
            chart: {
                type: 'column',
                margin: [50, 50, 100, 80]
            },
            title: {
                text: _title + "的站内信活跃度Top"
            },
            xAxis: {
                categories: categories,
                labels: {
                    rotation: -45,
                    align: 'right',
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: '发送次数 (次)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '发送了: <b>{point.y} 次</b>',
            },
            series: [{
                name: 'Population',
                data: series,
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
        });
        bind();

    };
    var bind = function () {

    };
    init();
});
