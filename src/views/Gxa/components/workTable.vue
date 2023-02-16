<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div id="work-container">
    <el-card v-for="item in data" class="work-show-item">
      <a :href="item.websiteUrl" target="_blank">
        <img :src="item.indexHmtlImg" alt="" class="work-index-img" />
        <div>
          <div>{{ item.workName }}</div>
          <div class="work-introduction-detail" :title="item.introductionToWorks">
            {{ item.introductionToWorks }}
          </div>
        </div>
      </a>
    </el-card>
  </div>
</template>
<style>
#work-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.work-index-img {
  width: 100%;
  aspect-ratio: 2 / 1;
}

.work-show-item {
  width: 22%;
  text-align: start;
  margin-left: calc(12% / 5);
  margin-bottom: 20px;
}

.work-introduction-detail {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
