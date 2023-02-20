<template>
  了解更多：
  <div class="box">
    <el-timeline v-for="(item, idx) in showList" :key="idx">
      <el-timeline-item
        v-for="(jtem, jdx) in item"
        :key="jdx"
        :timestamp="jtem.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ jtem.username }}</h4>
          <p>{{ jtem.contribution }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showList = ref([
  [
    {
      timestamp: '2022/8/25-2022/9/27',
      username: '计科204余明玺(23届会长)',
      contribution: '官网后端开发，前端UI优化，测试，数据库设计, 官网首页设计',
    }, {
      timestamp: '2022/8/25-2022/9/31',
      username: '计科201乔虎虎(23届算法部部长)',
      contribution: '官网前台开发，测试',
    }, {
      timestamp: '2022/8/25-2022/10/31',
      username: '软件205安友珍(23届算法部干事)',
      contribution: '官网原型图设计，官网前端后台开发',
    },
  ],
  [
    {
      timestamp: '2022/9/24',
      username: '计科216熊李彦(23届秘书处干事)',
      contribution: '用户注册欢迎信',
    },
    {
      timestamp: '2022/10/9',
      username: '计科211梁媛媛(23届算法部干事)',
      contribution: '素材制作',
    }
  ],
])
</script>

<style scoped>
.box{
  text-align: left;
}
.el-timeline-item{
  width: calc(32vw - 30px);
}
.el-timeline{
  float: left;
}
</style>