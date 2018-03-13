<template>
  <div>
    <div class="base" :class="{a:chose,b:!chose}"></div>
    <button @click="chose=!chose">change</button>
  </div>

</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        chose: true
      }
    }
  }
</script>

<style scoped>
  .base {
    width: 50px;
    height: 50px;
    background: url('/static/imgs/home0.png') no-repeat;
    background-size: cover;
    border: 1px solid black;
  }

  .a {

    background: url('/static/imgs/home.png') no-repeat;
    border: 1px solid black;
    background-size: cover;
    border: 1px solid black;
  }

  .b {
    background: url('/static/imgs/home0.png') no-repeat;
    background-size: cover;

  }

  .img {
    background: yellow;
  }
</style>
