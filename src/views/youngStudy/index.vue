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
          @open="handleOpen"
        >
          <el-menu-item
            v-for="item of classList"
            :index="item.college_major_class"
          >
            <el-icon><document /></el-icon>
            <span>({{ item["count(*)"] }}){{ item.college_major_class }}</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>
        <h2>青年大学习本期未完成同学列表</h2>
      </el-header>

      <el-main style="text-align: left">
        <el-scrollbar>
          <list-cpm
            height="calc(100vh - 350px)"
            style="margin: 0 auto; width: 580px;"
            :list="userList"
            :page="page"
            :total-number="total"
            :is-page="true"
            :select="select"
            :is_pc="true"
            @page-change="
              (p) => {
                page = p;
                getData();
              }
            "
            @size-change="
              (s) => {
                pageSize = s;
                getData();
              }
            "
          />
        </el-scrollbar>
      </el-main>
      <el-footer style="text-align: left; font-size: 12px">
        <div class="toolbar">
          1.
          若有专业错误请联系计算机技术协会20计科余欢(qq:2639068489)或21网络熊佩瑶(qq:
          2985747206); <br />
          2.
          由于访问人数可能较多，需要频繁爬取数据，可能会涉及到违法违规问题。所以数据会缓存下来，每天9:00-23:00每隔两小时刷新数据，每周一全部重置。<br />
          3. 后续需要维护代码，则联系计算机技术协会理事会即可。
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import ListCpm from "../../components/list/index.vue";
import { ElLoading } from "element-plus";
const page = ref(1);
const pageSize = ref(12);
const userList = ref([]);
const classList = ref([]);
const currentClass = ref("");
const total = ref(0);
const select = [
  {
    label: "学院登记信息",
    prop: "college_major_class",
    width: 380,
  },
  {
    label: "姓名",
    prop: "username",
    width: 200,
  },
];

async function handleOpen(index) {
  const loading = ElLoading.service({
    text: "加载中",
    lock: true,
    background: "rgba(0, 0, 0, 0.7)",
  });
  currentClass.value = index;
  page.value = 1;
  await getData();
  setTimeout(() => loading.close(), 500);
}
async function getData() {
  const params = {
    page: page.value,
    pageSize: pageSize.value,
    className: currentClass.value,
  };
  const res = await axios.get("http://yibindfxy.top:3000/api/web/getData", {
    params,
  });
  userList.value = res.data.data.list;
  total.value = res.data.data.count;
}
async function getClassList() {
  const res = await axios.get("http://yibindfxy.top:3000/api/web/getClassList");
  classList.value = res.data.data;
  classList.value.sort((a, b) => b["count(*)"] - a["count(*)"]);
}
async function init() {
  await getClassList();
  currentClass.value = classList.value[0].college_major_class;
  await getData();
}
init();
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
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
