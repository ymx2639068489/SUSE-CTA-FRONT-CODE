<script setup>
import { getFinallyList } from "@/api/gxaWork";
import { ref } from "vue";

const dynamicList = ref([]);
const staticList = ref([]);
getFinallyList().then((res) => {
  console.log(res.data.data);
  dynamicList.value = res.data.data.dynamicList;
  staticList.value = res.data.data.staticList;
});
</script>

<template>
  <div id="final-competition-container">
    <div id="final-competition-detail">
      <p>恭喜以下队伍进入决赛, 请关注群内信息, 按时参加决赛!</p>
    </div>
    <h3>动态组</h3>
    <el-table id="final-competition-rank" :data="dynamicList">
      <el-table-column prop="teamName" label="团队名称" align="center" />
      <el-table-column prop="workName" label="作品名称" align="center" />
      <el-table-column prop="leader.username" label="队员1" width="90" align="center" />
      <el-table-column prop="teamMember1.username" label="队员2" width="90" align="center" />
      <el-table-column prop="teamMember2.username" label="队员3" width="90" align="center" />
      <el-table-column prop="score" label="老师评分平均分" width="130" align="center" />
      <el-table-column prop="networkScore" label="网络得分" width="100" align="center" />
      <el-table-column label="最终得分" width="100" align="center">
        <template #default="scope">
          {{  scope.row.score + scope.row.networkScore }}
        </template>
      </el-table-column>
    </el-table>
    <h3>静态组(没有网络安全测试分)</h3>
    <el-table id="final-competition-rank" :data="staticList">
      <el-table-column prop="teamName" label="团队名称" align="center" />
      <el-table-column prop="workName" label="作品名称" align="center" />
      <el-table-column prop="leader.username" label="队员1" width="120" align="center" />
      <el-table-column prop="teamMember1.username" label="队员2" width="120" align="center" />
      <el-table-column prop="teamMember2.username" label="队员3" width="120" align="center" />
      <el-table-column prop="score" label="最终得分" width="130" align="center" />
    </el-table>
  </div>
</template>

<style>
#final-competition-container {
}

#final-competition-rank {
}

#final-competition-detail {
}
</style>
