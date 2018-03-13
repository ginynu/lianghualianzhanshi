<template>
  <div class="container">
    <div class="pinyin">you</div>
    <div class="word">
        <span>
          你
        </span>
    </div>
    <div class="bushou">你</div>
    <div class="xxwz">你 好</div>
    <div class="qr">

      <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58" class="img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "card"
  }
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background: deepskyblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pinyin {

  }

  .word {
    /*height: 200px;*/
    height: 100px;
    width: 100px;
    border: 1px solid black;
    background: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906906070,3046597092&fm=27&gp=0.jpg');
    background-size: cover;
  }

  .bushou {
    /*height: 50px;*/
    border: 1px solid blue;
  }

  .xxwz {
    /*height: 200px;*/
    border: 1px solid yellow;
  }

  .qr {
  }

  .img {

  }
</style>
