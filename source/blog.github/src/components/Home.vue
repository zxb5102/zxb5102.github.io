<template>
  <div class="home">
    <div class="text-light text-center pt-5">
      <h3>没有什么拿出来招待大家 大家就先欣赏 萨克斯 吧</h3>
    </div>
    <div class="d-flex">
      <audio controls class="pt-2 m-auto">
        <source src="/static/goinghome.mp3" type="audio/mp3"> Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // var bingData = document.querySelector('#bing-data');
    // console.log(bingData);
    // this.axios({
    //   url:'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10',
    // }).then(({data})=>{
    //   console.log(data);
    // })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import (reference) "../less/variable.less";
.home {
  padding-top: 80px;
  min-height: 100vh;
  background-image: var(--bgUrl);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
