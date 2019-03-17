<template>
    <div class="wrap">
        <div class="hold-weibo">
            <iframe id="weibo" style="width:100%; height:100%;" frameborder="0" scrolling="true" src="http://v.t.sina.com.cn/widget/widget_blog.php?uid=2502557475"></iframe>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.wrap {
    background-image: url(/static/img/user.jpg);
    min-height: 100vh;
    background-position-x: right;
    background-size: cover;
    background-position-y: bottom;
    @media screen and (max-width: 992px) {
        background-position-x: right;
        background-size: contain;
        background-position-y: top;
    }
}
.hold-weibo {
    height: 60vh;
    position: relative;
    top: 10vh;
    left: -20%;
    width: 40%;
    margin: auto;
    // background-color: yellow;
    @media screen and(max-width:992px){
        width:95%;
        left:0;
        top:20vh;
        height:60vh;
    }
}
</style>


