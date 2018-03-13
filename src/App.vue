<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--<Card></Card>-->
    <!--<Fa></Fa>-->
    <!--<A></A>-->
    <!--<B></B>-->
    <!--<tab></tab>-->
    <!--<Item></Item>-->
    <!--<history></history>-->
    <!--<item-page></item-page>-->
    <!--<my-table :data="data"></my-table>-->
    <!--<my-line ></my-line>-->
    <!--<tab></tab>-->
    <!--<Page1></Page1>-->
    <!--<transition-->
    <!--mode="out-in"-->
    <!--enter-active-class="animated fadeInLeft"-->
    <!--leave-active-class="animated fadeOutRight"-->
    <!--&gt;-->
    <!--<transition
    mode="out-in"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutLeft"
    >
      -->
    <transition
      mode="out-in"
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutUp"
    >
      <router-view></router-view>
    </transition>


    <div class='link-item' tag="div">
      <router-link v-for="i,index in items" :key="index" :to="i[1]" style="color: white">
        {{i[0]}}
      </router-link>
    </div>

    <!--<Test></Test>-->
    <!--<my-code></my-code>-->
  </div>
</template>

<script>
  import History from './components/History'
  import Test from './components/Test'

  import Page1 from './components/Page1'
  import Card from './components/Card'
  import Fa from './components/Fa'
  import A from './components/A'
  import B from './components/Home'
  import Item from './components/Item'
  import Tab from './components/Tab'
  import ItemPage from './components/ItemPage'
  import MyTable from './components/MyTable'
  import MyLine from './components/MyLine'
  import MyCode from './components/MyCode'

  export default {
    name: 'App',
    components: {
      Card,
      Fa,
      A,
      MyCode,
      B,
      Tab,
      Item,
      ItemPage,
      History,
      MyTable,
      MyLine,
      Page1,
      Test,
    },
    data() {
      return {
        items: [
          ['龙虎榜', '/item-page'],
          ['黄页', '/ss'],
          ['研报', '/asa'],
          ['我的收藏', '/me'],

        ],
        data: {

          headers: [1, 2, 3, 4],
          rows: [
            [11, 111, 1111, 11111],
            [2, 22, 222, 2222],
          ]
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }

  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100vw;
    height: 100vh;
  }

  .link-item {
    color: white;
    position: fixed;
    width: 100%;
    bottom: 5px;
    display: flex;
    justify-content: space-around;
    background: lightskyblue;
    padding: 5px;
  }
</style>
