<template>
  <div class="wrap">
    <div class="left">
      <div class="left-top" >
       <h1 style="padding: 0;margin: 10px"> {{this.info[0]}} </h1>
        查看策略详情及当前持仓
      </div>
      <div>
        <div>
          开源策略回测年收益：{{this.info[5]}}
          回撤：{{this.info[4]}}
        </div>
        <div>
          订阅策略回测年收益：{{this.info[3]}}
          回撤：{{this.info[4]}}
        </div>

      </div>

    </div>
    <div class="right">
      <div class="right-top">
      <h1 style="padding: 0;margin: 10px">
        实盘收益：{{this.info[7]}}
      </h1>策略方实盘交易记录

      </div>
      <div>
        订阅用户：{{8}}
        实盘收益：{{9}}
        时间：{{10}}
      </div>
      <div>
        订阅用户：{{11}}
        实盘收益：{{12}}
        时间：{{13}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "item",
    props: ['info'],

  }
</script>

<style scoped>
  .wrap {
    display: flex;
    width: 90%;
    /*height: 30px;*/

    margin: 5px;
  }

  .left {
    width: 50%;
    flex-grow: 1;

    /*background: lightslategray;*/
  }

  .right {
    width: 50%;

    flex-grow: 1;
    /*background: blue;*/
  }

  .left-top{
      background: lightskyblue;
  }

  .right-top{
    background: grey;
  }
</style>
