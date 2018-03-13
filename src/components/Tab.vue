<template>
  <div>
    <img
      class="img"
      @click="cur_index=index"
      v-for="i,index in items"
      :src="index==cur_index?i[1]:i[0]"></img>
  </div>
</template>

<script>
  export default {
    name: "tab",
    data() {
      return {
        cur_index: 0,
        items: [
          [
            '/static/imgs/home_base.png',
            '/static/imgs/home_active.png'
          ],
          [
            '/static/imgs/me_base.png',
            '/static/imgs/me_active.png'
          ],
          [
            '/static/imgs/webo_base.png',
            '/static/imgs/webo_active.png'
          ]
        ]
      }
    }
  }
</script>

<style scoped>
  .img {
    width: 50px;
    height: 50px;

  }
</style>
