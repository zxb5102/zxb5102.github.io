<template>
    <div>
        <div class="top-bg">
            <div class="container">
                <div class="row justify-content-between align-items-center p-2 top-nav">
                    <div class="left-icon">
                        <img src="/static/img/nav-icon2.png" alt="">
                    </div>
                    <div class="menus d-none d-sm-block">
                        <router-link  v-for="item in menus" :key="item.name" :to="item.link" class="px-3 text-white top-nav-link" >{{item.name}}</router-link>
                    </div>
                    <div class="d-block d-sm-none icon-hold">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "音乐",
          link: "/music"
        },
        {
          name: "工作",
          link: "/work"
        },
        {
          name: "夜晚",
          link: "/night"
        },
        {
          name: "这些年",
          link: "/the-past"
        },
        {
          name: "那些人",
          link: "/people"
        }
      ].map(item => {
        item.link = `/home/${item.link}`;
        return item;
      })
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "../less/variable.less";
.top-bg{
    background-color: #00000047;
}
.left-icon {
  img {
    height: 50px;
    width: auto;
    max-height: 100%;
  }
}
.top-nav {
  height: 80px;
}
.menus {
  .top-nav-link {
    text-decoration: none;
  }
}
.icon-hold{
    color: white;
    font-size: 30px;
}
</style>
<style>
body,
html {
  height: 100%;
}
/* body {
  background-image: url(/static/img/home-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>


