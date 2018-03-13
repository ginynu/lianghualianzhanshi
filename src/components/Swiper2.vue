<template>
  <v-touch @swipeleft="prev" @swiperight="next" class="container">
    <img :src="imgs[cur_img_index]" class="animated bounce img">

    <div class="btn" @click="start" >立即体验</div>

  </v-touch>
</template>

<script>
  export default {
    name: "swiper",
    data() {
      return {
        cur_img_index: 0,
        imgs: [
          '/static/start/s1.jpg',
          '/static/start/s3.jpg',
          ]
      }
    },
    watch: {
      cur_img_index() {
        this.refresh()
      }
    },
    methods: {
      start(){
        this.$router.push('/item_page')
      },
      refresh() {
        // this.$refs.img.style.background = `url('${this.imgs[this.cur_img_index]}')`
        // this.$refs.img.style.backgroundSize = 'cover'
      },
      next() {
        this.cur_img_index = (this.cur_img_index + 1) % this.imgs.length
        console.log('next');
      },
      prev() {
        this.cur_img_index = (this.cur_img_index + this.imgs.length - 1) % this.imgs.length
        console.log('prev');
      },
    },
    mounted() {
      this.refresh()
    }

  }
</script>

<style scoped>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    z-index: 111;
  }

  .img {
    width: 100vw;
    height: 100vh;
  }

  .btn{
    position: absolute;
    bottom: 30px;
    color:rgb(115,117,117);
    /*background: lightskyblue;*/
    border-radius: 10px;
    border: 1px solid rgb(111,111,111);
  }
  .dots {
    display: flex;
    position: absolute;
    bottom: 0px;
    flex-direction: row;
    border-radius: 30px;
    /*background: rgba(233, 233, 233, 0.3);*/

    /*使用下面的方法，子元素透明度也被改变且无法复原*/
    background: white;
    opacity: 0.3;
    margin: 10px;
    padding: 0px 10px;
  }

  .dot-base {
    width: 15px;
    height: 15px;
    background: white;
    margin: 10px;
    border-radius: 50%;
  }

  .cur-dot {
    background: orangered;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
