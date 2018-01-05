<template>
    <div id="pie">
        <div id="myCharts" style="width: 100%; height: 100%;"></div>
        <div class="moreLink">
            <p>更多内容：<a href="http://echarts.baidu.com/" target="_blank">echarts</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pie',
    methods: {
        drawPie() {
            let myChart = this.$echarts.init(this.$el.querySelector('#myCharts'))
            myChart.setOption({
                title: {
                    text: '访问来源',
                    subtext: '数据纯属虚构',
                    left: 'center',
                    textStyle: {
                        color: '#555'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
                },
                series: [{
                        name: '访问来源',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 335, name: '直达', selected: true },
                            { value: 679, name: '营销广告' },
                            { value: 1548, name: '搜索引擎' }
                        ]
                    },
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        label: {
                            normal: {
                                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#eee',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                shadowBlur: 1,
                                shadowOffsetX: 1,
                                shadowOffsetY: 1,
                                shadowColor: '#999',
                                rich: {
                                    a: {
                                        color: '#999',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    abg: {
                                        backgroundColor: '#333',
                                        width: '100%',
                                        align: 'right',
                                        height: 22,
                                        borderRadius: [4, 4, 0, 0]
                                    },
                                    hr: {
                                        borderColor: '#aaa',
                                        width: '100%',
                                        borderWidth: 0.5,
                                        height: 0
                                    },
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#eee',
                                        backgroundColor: '#334455',
                                        padding: [2, 4],
                                        borderRadius: 2
                                    }
                                }
                            }
                        },
                        data: [
                            { value: 335, name: '直达' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1048, name: '百度' },
                            { value: 251, name: '谷歌' },
                            { value: 147, name: '必应' },
                            { value: 102, name: '其他' }
                        ]
                    }
                ]
            })
        }
    },
    mounted() {
        this.drawPie()
    }
}
</script>
<style lang='stylus'>
#pie {
    width: 100%;
    height: 80%;
}
</style>