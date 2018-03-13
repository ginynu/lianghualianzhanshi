<template>
  <div class="container">
    <div style="color:white;font:'黑体';background: lightskyblue;width: 100%;padding: 10px">
      <span style="color:white;font-size:20px;"> 量化链</span>
      <span style="color:white;font-size:15px;">(配合券商培养用户合作Demo版)</span>
    </div>
    <div @click="click">

    <item  v-for="i,index in items" :info="i" :key="index">{{i}}</item>
    </div>

  </div>
</template>

<script>
  import Item from './Item2'
  import {items} from '../api/index'

  export default {
    name: "item-page",
    data() {
      return {
        items: []
      }
    },
    components: {
      Item,
    },

    created() {
      this.items = items
      // console.log(items)
    },
    methods:{
      click(){
        console.log('pageq')
        this.$router.push('/page1')      }
    }

  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0;
  }
</style>
