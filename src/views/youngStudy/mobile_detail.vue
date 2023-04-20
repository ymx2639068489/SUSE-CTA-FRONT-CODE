<template>
  <div class="box">
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3">{{ r.query.className }}</span>
      </template>
    </el-page-header>
    <div class="outer-container">
        <div class="inner-container">
          <ul class="infinite-list" style="overflow: auto">
            <li
              v-for="i in userList"
              :key="i.college_major_class"
              class="infinite-list-item"
              @click="itemClick(i.college_major_class)"
            >
              {{ i.username }}
            </li>
          </ul>
        </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router';
const r = useRoute();
const userList = ref([]);
function goBack() {
  location.href = location.origin + '/mobile_class';
}

async function init() {
  const className = r.query.className;
  const res = await axios.get("http://yibindfxy.top:3000/api/web/getData", {
    params: {
      page: 1,
      pageSize: 149,
      className,
    }
  });
  userList.value = res.data.data.list;
}
init();
</script>

<style scoped>
.el-page-header {
  height: 49px;
  line-height: 49px;
}
.el-page-header >>> .el-page-header__content{
  overflow: hidden;
}
.outer-container{
	width: 100vw;
	height: calc(100vh - 49px);
	position: relative;
	overflow: hidden;
}
.inner-container{
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
  width: v-bind(boxWidth);
  list-style: none;
  padding: 0;
  margin: 0 10px 0 0;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
</style>
