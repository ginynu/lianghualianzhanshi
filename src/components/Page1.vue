<template>
  <div class="container">
    <div
      style="display:flex;align-items:center;padding:5px;background: lightskyblue;justify-content:space-around;color:white;width: 100%">
      <h4 style="padding-left: 10px">
        量化链
        <small>(配合券商Demo)</small>
      </h4>
      <div style="width: 30px;height: 30px;background: url('/static/imgs/back1.png');background-size: cover"
           @click.stop="back"></div>
    </div>
    <div style="color:rgb(111,111,111);padding-left:15px;background: lightgrey;">
      银行指数耗时增强
    </div>
    <div style="color: gray">

      <table class="table"
             style="font-size: 15px;border: 0">
        <tbody style="text-align: center;border: none">
        <tr>
          <td>最佳策略</td>
          <td>银行翻倍</td>
          <td>年华收益</td>
          <td>29.13%</td>
        </tr>
        <tr>
          <td>策略方实盘</td>
          <td>28.18%</td>
          <td>用户实盘</td>
          <td>11.24%</td>
        </tr>
        </tbody>
      </table>

    </div>
    <div
      style="padding:5px 10px;display: flex;justify-content: space-between; background:lightskyblue;color: white; ">
      <h5>
        调仓时间
        <small>每周一</small>
      </h5>
      <h5>
        总资金：
        <small>10万</small>
      </h5>
    </div>
    <div
      style="font-family: '黑体';color:rgb(111,111,111);padding:5px 10px;font-size:20px;background: lightgrey;justify-content: flex-start">
      当前仓位
    </div>
    <MyTable :data="data">

    </MyTable>
    <div style="display: flex;background: lightskyblue;justify-content: space-around;padding: 5px">
      <div v-for="i,index in tabs" @click="changeTab(index)"
           style="color: white"
           :class="{'tab-active':cur_tab_index==index}"
      >{{i['title']}}
      </div>
    </div>
    <div style="overflow-scrolling:touch;height: 0px">
      <!--{{cur_tab['content']}}-->
      <component :is="cur_tab['content']"></component>
    </div>
  </div>
</template>

<script>
  import MyTable from './MyTable'
  import History from './History'
  import Strage from './Strage'
  import StrategyCode from './StrategyCode'
  import ShiPan from './ShiPan'

  import MyLine from './MyLine'

  export default {
    name: "page1",
    components: {
      MyTable,
      History,
      Strage,
      ShiPan,
      StrategyCode,
      MyLine,
    },

    data() {
      return {
        data: {
          headers: [
            '名称',
            '代码', '持仓', '比例'
          ],
          rows: [
            ['民生银行', '600016', '2300', '20%'],
            ['民生银行', '600016', '2300', '20%'],
            ['民生银行', '600016', '2300', '20%'],
            ['民生银行', '600016', '2300', '20%'],
            ['民生银行', '600016', '2300', '20%'],
            ['民生银行', '600016', '2300', '20%'],
          ]
        },
        cur_tab_index: 0,
        tabs: [
          {
            title: '策略研报',
            content: 'strage',
          },
          {
            title: '历史调仓',
            content: 'history',
          },
          {
            title: '实盘',
            content: 'my-line',
          },
          {
            title: '策略代码',
            content: 'strategy-code',
          },

        ]
      }
    },
    computed: {
      cur_tab() {
        return this.tabs[this.cur_tab_index]
      }
    },
    methods: {
      changeTab(index) {
        console.log(index)
        this.cur_tab_index = index
      },
      back() {
        console.log('back')
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0;
    font-family: "黑体";
    overflow-y: visible;
  }

  td {
    padding: 5px;
    margin: 0px;
  }

  .tab-active {
    background: deepskyblue;
    padding: 0 10px;
    border-radius: 5px;
  }
</style>
