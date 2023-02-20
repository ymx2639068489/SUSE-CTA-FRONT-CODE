<template>
  <div class="box">
    <h2>协会主攻/举办/协办常见竞赛(按时间线排序)</h2>
    <el-card class="card" v-for="(item, idx) in competitionList" :key="idx">
      <div class="face">
        <span>{{ idx + 1 }}.{{ item.name }}</span>
      </div>
      <div class="back">
        <span>{{ item.description }}</span>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import  { ref } from 'vue'
const competitionList = ref([
  {
    name: '国信安网页设计竞赛',
    description: `

    由计算机科学与工程学院主办，计算机技术协会协办. 为了加快多学科结合的人才培养模式改革和创新的步伐，培养满足社会需要的高素质技能型人才`
  }, {
    name: '算法新生赛',
    description: `
    
    由计算机技术协会主办，为计算机科学与工程学院培养出更多算法方面的人才，让大家了解、认识算法和算法比赛，为下一年算法主力军做准备`
  }, {
    name: '计算机知识线上竞赛',
    description: `
    由计算机技术协会主办，为了推动我校大学生的计算机软硬件以及计算机基础知识的了解，普及计算机软硬件知识，提高同学们的计算机应用水平和综合素质，故进行本次线上计算机基础知识竞赛`
  }, {
    name: '大学生服务外包创新创业大赛',
    description: `
    服创是响应国家关于鼓励服务外包产业发展、加强服务外包人才培养的相关战略举措与号召，举办的每年一届的全国性竞赛。
    大赛由企业出题, 含金量还是挺高的,是一个非常不错的锻炼能力的比赛`
  }, {
    name: '蓝桥杯',
    description: `
    蓝桥杯全国软件和信息技术专业人才大赛是由工业和信息化部人才交流中心举办的全国性IT学科赛事。总体难度越来越难, 所以想要拿奖得乘早,大一新生不要担心,基本上参与就能有一个省三, 含金量还行
    `
  }, {
    name: '计算机设计大赛',
    description: `
    
    在参与了前面的国信安以及服创竞赛后, 你的手上一定有1-2个项目了, 不妨拿来继续参加计算机设计大赛(省奖还是轻轻松松的), `
  }, {
    name: '天梯赛, 达内杯ACM校赛',
    description: `
    
    天梯赛是全国竞赛, 难度一般,但队伍有限, 有一定含金量. 校赛是省赛的第一场选拔赛, 也是由计算机科学与工程学院主办,计算机技术协会协办的算法竞赛, 两人一组`
  }, {
    name: 'ACM省赛,区域赛,国赛,亚洲总决赛',
    description: `


    ACM金牌在等着你! ACM金牌在手, 基本上能杀穿了! (能拿个奖就已经超过大部分人了)`
  }
])
</script>
<style scoped>
.box{
  position: relative;
  color: black;
  width: 100%;
  height: 100%;
}
.card{
  float: left;
  width: 18%;
  min-width: 180px;
  height: calc(50vh - 250px);
  min-height: 180px;
  margin: 3% 0 0 calc(5.6% - 51.6px);
}


</style>
<style scoped>
.card{
  position: relative;
  white-space: pre-wrap;
  word-break: break-word;
  perspective: 18vw;
  color: #0691C4;
}

.card .face{
  transition: .5s;
  backface-visibility: hidden;
  text-align: center;
  font-weight: 800;
  margin: auto;
}
.card .back{
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  margin: auto;
  transition: .5s;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  margin: auto;
}
.card:hover .face{
  transform: rotateY(-180deg);
}
.card:hover .back{
  transform: rotateY(0);
}
</style>