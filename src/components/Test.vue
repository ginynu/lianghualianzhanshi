<template>
  <div>
    test
  </div>
</template>

<script>
  export default {
    name: "test",
    mounted() {
      var evt = "onorientationchange" in window ? "orientationchange" : "resize";

      window.addEventListener(evt, function (e) {
        console.log(e)
      }, false);
    }
  }
</script>

<style scoped>

</style>
