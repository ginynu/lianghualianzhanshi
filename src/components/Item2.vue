<template>
  <div class="wrap">

    <div style="padding: 5px;background:rgb(245,245,245);width:100%;display: flex;flex-direction: column">
      <div style="width:100%;display: flex;flex-direction: row">
        <img style=";width: 30px;height: 30px" src="/static/imgs/img0.png" alt="">
        <div style="width: 100%">
          <span style="color:rgb(111,111,111);font-size: 20px"> {{this.info[0]}} </span>
          <div style="width: 100%;display: flex;justify-content: space-between;align-items: center">
            <span style="color: rgb(111,111,111);font-size: 18px">
          实盘收益：
            </span>
            <span style="color: red;font-size: 25px;padding-right: 30px">
          {{this.info[7]}}
            </span>
          </div>
        </div>
        <div @click.stop="click"
             ref="sc"
             style="background: url('/static/imgs/sc0.png');width: 20px;height: 20px;background-size: cover;padding-right: 20px"></div>
      </div>

    </div>
    <div
      style="color:white;font-size:8px;width:100%;display: flex;  background: lightskyblue; justify-content: space-around; ">
      <div style=" width: 45%;">
        <div style="color:white;padding: 3px">
          <span>开源策略回测年收益：</span><span style="color:red">{{this.info[5]}}</span>
          <span>回撤：</span> <span style="color:red">{{this.info[4]}}</span>
        </div>
        <div style="color:white;padding: 3px">
          <span>订阅策略回测年收益:</span>
          <span style="color:red">{{this.info[3]}}</span>
          <span>回撤：</span> <span style="color:red">{{this.info[4]}}</span>
        </div>

      </div>

      <!--<div style="width: 1px;height: 80%;background: black"></div>-->

      <div style="color:white;  width: auto; ">
        <div style="padding: 3px">
          <span>订阅用户：</span><span style="color: red">{{this.info[8]}}</span>
          <span>实盘收益：</span><span style="color: red">{{this.info[9]}}</span>
          <span>时间：</span><span style="color: red">{{this.info[10]}}</span>

        </div>
        <div style="padding: 3px">
          <span>订阅用户：</span><span style="color: red">{{this.info[8]}}</span>
          <span>实盘收益：</span><span style="color: red">{{this.info[9]}}</span>
          <span>时间：</span><span style="color: red">{{this.info[10]}}</span>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "item",
    props: ['info'],
    computed: {
      show() {
        return !this.$store ? false : this.$store.getters.isExit(this.info)
      }
    },
    methods: {
      click() {
        // this.show = !this.show

        if (!this.show) {
          this.$store.commit('add', this.info)
          var url = this.show ? 'url(/static/imgs/sc2.png)' : 'url(/static/imgs/sc0.png)'
          this.$refs.sc.style.background = url
          this.$refs.sc.style.backgroundSize = 'cover'
        }
        else{
          this.$store.commit('remove', this.info)
          var url = this.show ? 'url(/static/imgs/sc2.png)' : 'url(/static/imgs/sc0.png)'
          this.$refs.sc.style.background = url
          this.$refs.sc.style.backgroundSize = 'cover'
        }
      },
      refresh() {

        var url = this.show ? 'url(/static/imgs/sc2.png)' : 'url(/static/imgs/sc0.png)'
        this.$refs.sc.style.background = url
        this.$refs.sc.style.backgroundSize = 'cover'

      }
    },
    mounted() {
      this.refresh()
    }
  }
</script>

<style scoped>
  .wrap {
    display: flex;
    width: fit-content;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: '黑体';
    margin: 10px 0;
    /*padding: 10px;*/
    /*box-sizing: border-box;*/
    /*height: 30px;*/
    /*background: lightskyblue;*/
    /*margin: 5px;*/
  }

  .left {
    /*width: 50%;*/
    /*padding: 10px;*/
    flex-grow: 1;
    /*background: orangered;*/
  }

  .right {
    /*width: 50%;*/

    flex-grow: 1;
    /*padding: 10px;*/
    /*background: blue;*/
  }


</style>
