<template>
  <div>
    <item v-for="i,index in items" :info="i" :key="index"></item>
  </div>
</template>

<script>
  import Item from './Item2'

  export default {
    name: "me",
    components: {
      Item,
    },
    computed: {
      items() {
        return this.$store.state.list
      }
    }
  }
</script>

<style scoped>

</style>
