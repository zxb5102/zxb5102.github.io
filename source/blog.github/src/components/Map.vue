<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="order-sm-1 order-2 col-sm-6 col-12 col-xl-4">
          <div class="tools">
            <div class="d-sm-flex p-2">
              <span class="mb-sm-0 mb-1 d-sm-inline d-block">学历：</span>
              <el-checkbox-group v-model="checkedEdu" @change="filterChange">
                <el-checkbox v-for="edu in eduBox" :label="edu" :key="edu">{{edu}}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="d-flex p-2">
              <span>月薪：</span>
              <el-input-number v-model="salary" :min="-1" size="mini" @change="filterChange"></el-input-number>
            </div>
            <div class="d-flex p-2">
              <span>工作经验：</span>
              <el-input-number v-model="exp" :min="-1" :max="10" size="mini" @change="filterChange"></el-input-number>
            </div>
            <div class="d-flex p-2">
              <span>职位描述包含：</span>
              <el-input v-model="resp" placeholder="# 分割需要包含的搜索项" size="mini" style="max-width:300px" @keyup.enter.native="filterChange"></el-input>
            </div>
            <div class="d-flex p-2">
              <span>福利包含：</span>
              <el-input v-model="welfare" placeholder="# 分割需要包含的搜索项" size="mini" style="max-width:300px" @keyup.enter.native="filterChange"></el-input>
            </div>
            <div class="d-flex p-2">
              <span>创建时间：</span>
              <el-date-picker v-model="createDate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" size="mini" @change="filterChange">
              </el-date-picker>
            </div>
            <div class="d-flex p-2">
              <span>更新时间：</span>
              <el-date-picker v-model="updateDate" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" size="mini" @change="filterChange">
              </el-date-picker>
            </div>
            <div class="p-2 small text-info">
              <div>
                数据更新日期：2018年9月10日
              </div>
              <div>
                数据来源：智联招聘
              </div>
              <div>关键字：Web前端开发 杭州</div>
            </div>
          </div>
        </div>
        <div class="order-sm-2 order-1 col-sm-6 col-12 col-xl-8">
          <div class="map-data">
            <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
              <!-- <el-amap-search-box class="search-box"></el-amap-search-box> -->
              <el-amap-info-window :position="currentWindow.position" :content="currentWindow.content" :visible="currentWindow.visible" :events="currentWindow.events">
              </el-amap-info-window>
              <el-amap-marker :key="index" v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
            </el-amap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mapData from "./map.data.json";
export default {
  data() {
    return {
      eduBox: ["本科", "大专", "不限", "硕士"],
      checkedEdu: ["本科", "大专", "不限", "硕士"],
      resp: "",
      salary: -1,
      exp: -1,
      welfare: "",
      originMarkers: [],
      createDate: "",
      updateDate: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      currentWindow: {
        position: [120.125068, 30.225363],
        content: "杭州西湖",
        events: {
          close: function() {
            this.currentWindow.visible = false;
          }.bind(this)
        },
        visible: true
      },
      zoom: 12,
      center: [120.125068, 30.225363],
      markers: []
    };
  },
  created() {
    this.originMarkers = mapData;
    this.markers = mapData.map(this.mapResult);
    if (window.document.documentElement.clientWidth < 576) {
      this.$notify({
        title: "提示",
        message: "移动端体验受限",
        type: "warning",
        duration: 5000
      });
    }
  },
  methods: {
    mapResult(item) {
      var { geo: { lat, lon } } = item;
      return {
        position: [lon, lat],
        events: {
          click: function(item) {
            var {
              geo: { lat, lon },
              company: { name },
              salary,
              jobName,
              updateDate,
              createDate,
              eduLevel,
              welfare,
              workingExp,
              timeState,
              positionURL,
              feedbackRation,
              resumeCount,
              address
            } = item;
            this.currentWindow = Object.assign(this.currentWindow, {
              position: [lon, lat],
              content: `
              <div class="small">
                    <div>${name}</div>
                    <div>${jobName}</div>
                    <div class="text-primary">${eduLevel.name} ${salary} ${
                workingExp.name
              }</div>
                    <div>${welfare.join(",")}</div>
                    <div>更新时间：${updateDate}</div>
                    <div>创建时间：${createDate}</div>
                    <div>时间状态：${timeState}</div>
                    <div>反馈率：${(feedbackRation * 100).toFixed(2)} %</div>
                    <div>resumeCount：${resumeCount}</div>
                    <div>${address}</div>
                    <div><a href="${positionURL}" target="_blank">链接地址</a></div>
              </div>
                  `,
              visible: true
            });
          }.bind(this, item)
        }
      };
    },
    filterChange() {
      // true => keep
      this.markers = this.originMarkers
        .filter(eachItem => {
          // console.log(eachItem);
          var {
            // geo: { lat, lon },
            company,
            salary,
            jobName,
            updateDate,
            createDate,
            eduLevel,
            welfare,
            workingExp,
            timeState,
            positionURL,
            feedbackRation,
            resumeCount,
            address,
            responsibility
          } = eachItem;
          // 学历
          // if(eduLevel.name.indexOf('本科') == -1 && eduLevel.name.indexOf('大专') == -1){
          //   console.log(eduLevel.name);
          // }
          if (this.checkedEdu.indexOf(eduLevel.name) == -1) {
            return false;
          }
          //工作经验
          var reg = /[\u4e00-\u9fa5]/g;
          // 不限 0 1年以下 无经验
          if (workingExp.name != "不限") {
            var respAry = workingExp.name.replace(reg, "").split("-");
            if (workingExp.name === "1年以下" || workingExp.name === "无经验") {
              respAry = [0, 0];
            }
            if (respAry.length === 2) {
              var begin = parseInt(respAry[0]);
              var end = parseInt(respAry[1]);
              if (this.exp !== -1 && (this.exp < begin || this.exp > end)) {
                return false;
              }
            } else {
              console.log(
                `处理工作经验出错 ${company.name} ${workingExp.name}`
              );
              return false;
            }
          }
          // 薪酬
          if (this.salary !== -1 || salary === "薪资面议") {
            var salaryReg = /^[0-9]{1,}k-[0-9]{1,}k$/;
            if (salaryReg.test(salary.toLowerCase())) {
              var [minSalary, maxSalary] = salary.split("-").map(item => {
                return parseInt(item.replace("k", ""));
              });
              if (this.salary > maxSalary) {
                return false;
              }
            } else {
              console.log(`薪酬 ${salary} 无效`);
              return false;
            }
          }
          //职位描述包含关键字
          var respAry = this.resp.split("#").map(item => {
            return item.trim();
          });
          for (const i of respAry) {
            if (responsibility.toLowerCase().indexOf(i.toLowerCase()) == -1) {
              return false;
            }
          }
          //包含福利
          var conWelfares = this.welfare.split("#").map(item => {
            return item.trim();
          });
          for (const i of conWelfares) {
            if (
              welfare
                .join("#")
                .toLowerCase()
                .indexOf(i.toLowerCase()) == -1
            ) {
              return false;
            }
          }
          //创建时间
          if (this.createDate && this.createDate.length > 0) {
            var [startDate, endDate] = this.createDate;
            // console.log(this);
            var tdate = new Date(createDate);
            if (tdate < startDate || tdate > endDate) {
              return false;
            }
          }
          //变更时间
          if (this.updateDate && this.updateDate.length > 0) {
            var [startDate, endDate] = this.updateDate;
            var tdate = new Date(updateDate);
            if (tdate < startDate || tdate > endDate) {
              return false;
            }
          }
          return true;
        })
        .map(this.mapResult);
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "../less/variable.less";
.tools {
  height: 100vh;
  @media @pdasm {
    height: auto;
  }
  width: 100%;
  & > div > span {
    min-width: 150px;
  }
}
.map-data {
  width: 100%;
  height: 100vh;
  @media @pdasm {
    height: 50vh;
  }
}
.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
}
</style>


