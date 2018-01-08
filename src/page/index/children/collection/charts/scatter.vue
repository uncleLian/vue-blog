<template>
    <div id="scatter">
        <div id="myCharts"></div>
        <div class="moreLink">
            <p>更多内容：<a href="http://echarts.baidu.com/" target="_blank">echarts</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'scatter',
    methods: {
        drawScatter() {
            let myChart = this.$echarts.init(this.$el.querySelector('#myCharts'))
            function getVirtulData(echarts, year) {
                year = year || '2017'
                var date = +echarts.number.parseDate(year + '-01-01')
                var end = +echarts.number.parseDate((+year + 1) + '-01-01')
                var dayTime = 3600 * 24 * 1000
                var data = []
                for (var time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ])
                }
                return data
            }
            var data = getVirtulData(this.$echarts, 2017)
            myChart.setOption({
                backgroundColor: '#404a59',
                title: {
                    top: 20,
                    text: '2017年某人每天的步数',
                    subtext: '数据纯属虚构',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '30',
                    left: '100',
                    data: ['步数', 'Top 10'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                calendar: [{
                    top: 100,
                    left: 'center',
                    range: ['2017-01-01', '2017-06-30'],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#000',
                            width: 4,
                            type: 'solid'
                        }
                    },
                    yearLabel: {
                        formatter: '{start}  1st',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#323c48',
                            borderWidth: 1,
                            borderColor: '#111'
                        }
                    }
                }, {
                    top: 340,
                    left: 'center',
                    range: ['2017-07-01', '2017-12-31'],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#000',
                            width: 4,
                            type: 'solid'
                        }
                    },
                    yearLabel: {
                        formatter: '{start}  2nd',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#323c48',
                            borderWidth: 1,
                            borderColor: '#111'
                        }
                    }
                }],
                series: [{
                        name: '步数',
                        type: 'scatter',
                        coordinateSystem: 'calendar',
                        data: data,
                        symbolSize: function(val) {
                            return val[1] / 500
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    },
                    {
                        name: '步数',
                        type: 'scatter',
                        coordinateSystem: 'calendar',
                        calendarIndex: 1,
                        data: data,
                        symbolSize: function(val) {
                            return val[1] / 500
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    },
                    {
                        name: 'Top 10',
                        type: 'effectScatter',
                        coordinateSystem: 'calendar',
                        calendarIndex: 1,
                        data: data.sort(function(a, b) {
                            return b[1] - a[1]
                        }).slice(0, 10),
                        symbolSize: function(val) {
                            return val[1] / 500
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    },
                    {
                        name: 'Top 10',
                        type: 'effectScatter',
                        coordinateSystem: 'calendar',
                        data: data.sort(function(a, b) {
                            return b[1] - a[1]
                        }).slice(0, 10),
                        symbolSize: function(val) {
                            return val[1] / 500
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            })
        }
    },
    mounted() {
        this.drawScatter()
    }
}
</script>
<style lang='stylus'>
#scatter {
    width: 100%;
    #myCharts{
        width: 100%;
        height: 100vh;
    }
}
</style>
