<template>
    <my-table :data="data"></my-table>
</template>

<script>
  import MyTable from './MyTable'

  export default {
    name: "history",
    components: {
      MyTable,
    },

    data() {
      return {
        data: {
          'headers':['时间','操作','代码','价格'],
          'rows':[
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],
            ['2017-06-06','卖','asda','1231'],

          ]
        }
      }
    },

  }
</script>

<style scoped>

</style>
