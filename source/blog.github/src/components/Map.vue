<template>
<div class="map-data">

    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
   <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events">
        </el-amap-info-window>
        <el-amap-marker :key="index" v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
      </el-amap>
</div>
</template>
<script>
import Vue from "vue";
import mapData from "./map.data.json";
import VueAMap from "vue-amap";

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "8469f8ad9edc63e3afd9ceaa787844d7",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});
export default {
  created() {
    console.log(mapData.data.results);
    this.markers = mapData.data.results.map(
      ({ geo: { lat, lon }, company: { name } }) => {
        return {
          position: [lon, lat],
          events: {
              click:function(poi,name){
                this.currentWindow = Object.assign(this.currentWindow, {
                  position: poi,
                  content: name,
                  visible: true
                });
              }.bind(this,[lon, lat],name),
            // click() {
            //   click:(function(poi,name,self) {
            //     this.currentWindow = Object.assign(self.currentWindow, {
            //       position: poi,
            //       content: name,
            //       visible: true
            //     });
            //   })([lon, lat],name,this)
            // }
          }
        };
      }
    );
  },
  data() {
    return {
      currentWindow: {
        position: [120.125068, 30.225363],
        content: "杭州西湖",
        events: {},
        visible: true
      },
      zoom: 8,
      center: [120.125068, 30.225363],
      markers: []
    };
  }
};
</script>
<style lang="less" scoped>
.map-data {
  width: 100%;
  height: 100vh;
}
</style>


