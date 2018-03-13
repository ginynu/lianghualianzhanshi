<template>
  <div class="container" style="color: rgb(111,117,115)">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th  scope="col" style="text-align: center;color: rgb(111,117,115)" v-for="h in data['headers']">{{h}}</th>

      </tr>
      </thead>
      <tbody style="text-align: center">
      <tr v-for="row in data['rows']">
        <td v-for="r in row">
          {{r}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  /*
  *   data{
  *
  *   headers :[]
      rows : [
        [
        ]
      ]
  *   }
  *
  *   row 是一个二维数组
  * */
  export default {
    name: "my-table",
    props: ['data'],

  }
</script>

<style scoped>
.container{
  height: fit-content;
}
</style>
