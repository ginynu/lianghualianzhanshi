<template>
  <div>
    <canvas class="chart" ref="chart" id="chart"></canvas>

  </div>
</template>

<script>
  import echarts from 'echarts'
  import macarons from '../lib/macarons'

  export default {
    name: "baidu-line",
    props: ['option'],
    mounted() {

      window.onload = () => {
        let dom = this.$refs.chart
        var myChart = echarts.init(dom);
        myChart.setOption(this.option, true);
      };
    }
  }
</script>

<style scoped>

  .chart {
    /*width: 100vw;*/
    /*height: 100vh;*/
    width: 600px;
    height: 300px;
  }
</style>
