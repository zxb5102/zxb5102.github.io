<template>
  <div class="home">
      <!-- <iframe src="https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=10" height="50px" width="50px" id="bing-data" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created(){
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
