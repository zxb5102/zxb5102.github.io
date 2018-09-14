<template>
  <div class="layout">
    <div class="top-bg fixed-top">
      <div class="container">
        <div class="row justify-content-between align-items-center p-2 top-nav">
          <div class="left-icon">
            <img src="/static/img/nav-icon2.png" alt="">
          </div>
          <div class="menus d-none d-sm-block">
            <router-link v-for="item in menus" :key="item.name" :to="item.link" class="px-3 text-white top-nav-link">{{item.name}}</router-link>
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
          link: "/home/music"
        },
        {
          name: "数据统计",
          link: "/map"
        }
        // {
        //   name: "夜晚",
        //   link: "/night"
        // },
        // {
        //   name: "这些年",
        //   link: "/the-past"
        // },
        // {
        //   name: "那些人",
        //   link: "/people"
        // }
      ].map(item => {
        // item.link = `/home/${item.link}`;
        return item;
      })
    };
  }
};
</script>
<style lang="less">
</style>

<style lang="less" scoped>
@import (reference) "../less/variable.less";
.top-bg {
  background-color: rgba(0, 0, 0, 0.4);
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
.icon-hold {
  color: white;
  font-size: 30px;
}
.layout{
  // padding-top:80px;
}
</style>