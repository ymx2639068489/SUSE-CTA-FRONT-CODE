<template>
  <div class="box">
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3">青年大学习未完成情况</span>
      </template>
    </el-page-header>
    <div class="outer-container">
      <div class="inner-container">
        <el-menu
          class="el-menu-vertical-demo infinite-list"
          @select="itemClick"
        >
          <el-sub-menu
            v-for="item of classList"
            :key="item.name"
            :index="item.name"
          >
            <template #title>
              <el-icon><document /></el-icon>
              ({{ item.cnt }}){{ item.name }}
            </template>
            <el-menu-item
              v-for="classItem of item.children"
              :key="classItem.className"
              :index="classItem.className"
            >
              ({{ classItem.count }}){{  classItem.className }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const classList = ref([]);

async function getClassList() {
  const res = await axios.get("http://yibindfxy.top:3000/api/web/getClassList");
  let fdyList = new Set();
  let temp = new Map();

  classList.value = [];
  for (let i = 0; i < res.data.data.length; i++) {
    fdyList.add(res.data.data[i].fdy);
  }
  for (const item of fdyList) temp[item] = [];
  for (let i = 0; i < res.data.data.length; i++) {
    temp[res.data.data[i].fdy].push({
      className: res.data.data[i].college_major_class,
      count: res.data.data[i].count,
    });
  }
  for (const key in temp) {
    let cnt = 0;
    for (let i = 0; i < temp[key].length; i ++ ) cnt += ~~ temp[key][i].count;
    classList.value.push({
      name: key,
      cnt,
      children: temp[key],
    });
  }
  let idx = classList.value.findIndex(v => v.name === "唐小淋");
  console.log(idx);
  temp = classList.value[0];
  classList.value[0] = classList.value[idx];
  classList.value[idx] = temp;
}

function itemClick(className) {
  location.href = location.origin + "/mobile_detail?className=" + className;
}
function goBack() {
  location.href = location.origin;
}
getClassList();
const boxWidth = ref(document.body.clientWidth);
const boxHeight = ref(document.body.clientHeight);
console.log(boxWidth.value, boxHeight.value);
</script>

<style scoped>
.foo {
  height: 25vh;
  text-align: left;
}
.box {
  float: left;
  height: v-bind(boxHeight);
  width: v-bind(boxWidth) ;
  overflow: hidden;
}
.el-menu-vertical-demo {
  width: v-bind(boxWidth);
}
.outer-container {
  width: 100vw;
  height: calc(100vh - 49px);
  position: relative;
  overflow: hidden;
}
.inner-container {
  position: absolute;
  left: 0;
  top: 0;
  right: -17px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.infinite-list {
  height: v-bind(boxHeight);
  width:  v-bind(boxWidth);
  list-style: none;
  padding: 0;
  margin: 0 10px 0 0;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.el-page-header {
  height: 49px;
  line-height: 49px;
}
</style>
