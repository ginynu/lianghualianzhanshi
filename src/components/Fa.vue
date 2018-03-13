<template>
  <div>
    <BaiduLine :option="option"></BaiduLine>
  </div>
</template>

<script>
  import BaiduLine from './BaiduLine'

  export default {
    name: "fa",
    components: {
      BaiduLine,

    },
    data() {
      return {}
    },
    computed: {
      option() {
        return {
          title: {
            text: '博客统计',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },

          calculable: true,
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['2016/07', '2016/10', '2016/11', '2016/12', '2017/01', '2017/02', '2017/03', '2017/04', '2017/06', '2017/07', '2017/08', '2017/09', '2017/10', '2017/11', '2017/12', '2018/01', '2018/02'],
          }],
          yAxis: [{
            type: 'value',
            axisLabel: {
              formatter: '{value} 篇'
            }
          }],
          series: [{
            name: '本月发表博客数目',
            type: 'line',
            data: [6, 6, 11, 4, 35, 82, 52, 11, 40, 28, 53, 35, 34, 56, 29, 72, 80],
          }
          ]
        };
      }
    },
    methods: {}

  }
</script>

<style scoped>

</style>
