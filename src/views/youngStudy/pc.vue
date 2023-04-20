<template>
  <el-container
    class="layout-container-demo"
    style="height: calc(100vh - 180px)"
  >
    <el-aside width="400px">
      <el-scrollbar>
        <el-menu
          :default-active="currentClass"
          class="el-menu-vertical-demo infinite-list"
          @select="handleOpen"
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
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>
        <h2>青年大学习本期未完成同学列表</h2>
      </el-header>
      <el-main style="text-align: left">
        <el-scrollbar>
          <h2 style="text-align: center">{{ currentClass }}</h2>
          <ul class="userList">
            <li
              v-for="item of userList"
              :key="item.username"
              class="user-list-item"
            >
              {{ item.username }}
            </li>
          </ul>
        </el-scrollbar>
      </el-main>
      <el-footer style="text-align: left; font-size: 12px">
        <div class="toolbar">
          1.
          若有专业错误请联系计算机技术协会20计科余欢(qq:2639068489)或21网络熊佩瑶(qq:
          2985747206); <br />
          2.
          由于访问人数可能较多，需要频繁爬取数据，可能会涉及到违法违规问题。所以数据会缓存下来，每天9:00-23:00每隔两小时刷新数据。<br />
          3. 后续需要维护代码，则联系计算机技术协会理事会即可。
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const userList = ref([]);
const classList = ref([]);
const currentClass = ref("");

async function handleOpen(index) {
  currentClass.value = index;
  await getData();
}
async function getData() {
  const params = {
    page: 1,
    pageSize: 149,
    className: currentClass.value,
  };
  const res = await axios.get("http://yibindfxy.top:3000/api/web/getData", {
    params,
  });
  userList.value = res.data.data.list;
}
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
    // let number = temp[key]
    let cnt = 0;
    for (let i = 0; i < temp[key].length; i ++ ) cnt += ~~ temp[key][i].count;
    classList.value.push({
      name: key,
      cnt,
      children: temp[key],
    });
  }
  let idx = classList.value.findIndex(v => v.name === "唐小淋");
  temp = classList.value[0];
  classList.value[0] = classList.value[idx];
  classList.value[idx] = temp;
}
async function init() {
  await getClassList();
  currentClass.value = classList.value[0].children[0].className;
  console.log(currentClass.value);
  await getData();
}
init();
</script>

<style scoped>
.userList {
  width: 580px;
  height: calc(100vh - 350px);
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.user-list-item {
  float: left;
  width: 75px;
  height: 50px;
  margin: 5px;
  line-height: 50px;
  text-align: center;
  background-color: rgb(6, 145, 196, 0.3);
  border-radius: 10%;
  transition: all 0.5s ease 0s;
}
.user-list-item:hover {
  transition: 0.5s;
  transform: scale(1.2); /* rotate(360deg) */
  cursor: pointer;
}
.user-list-item .layout-container-demo .el-header {
  position: relative;
  background-color: rgb(255, 255, 255);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background-color: rgb(255, 255, 255);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
