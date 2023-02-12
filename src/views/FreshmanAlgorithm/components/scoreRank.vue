<script setup>
import { getRankList } from "@/api/algorithm.js";
import { onMounted, ref, watch } from "vue";

const data = ref([]);
const row = ref([]);
const group = ref(true);
const semester = ref("");
const semesters = ref([]);
const elTableRef = ref();
watch(group, () => {
  GetRankList();
});
watch(semester, () => {
  GetRankList();
});
function GetRankList() {
  getRankList(!group.value, semester.value).then((res) => {
    data.value = res.data.list.map((item, cnt) => {
      const _i = {
        rank: cnt + 1,
        score: item.ans,
        username: item.user.username,
        major: item.user.major,
      };
      for (const j of item.list) {
        _i[j.competitionName] = {
          score: j.integral,
          description: j.description,
        };
      }
      return _i;
    });
    row.value = res.data.row
      .filter((item) => item !== "总分")
      .map((item) => ({
        label: item,
        prop: item,
        width: 80,
      }));
  });
}
function type(score) {
  if (score >= 4) return "success";
  if (score >= 3) return "";
  if (score >= 2) return "warning";
  return "info";
}
(() => {
  let year = new Date().getFullYear(),
    month = new Date().getMonth();
  if (month < 9) semester.value = `${year - 1}-${year}`;
  else semester.value = `${year}-${year + 1}`;
  for (let i = 2021; i <= year; i++) {
    if (!(i === year && month < 9)) semesters.value.push(`${i}-${i + 1}`);
  }
})();
onMounted(() => {
  GetRankList();
});
</script>
<template>
  <el-card class="box">
    <template #header>
      <div id="score-rank-label">排行榜</div>
      <el-switch
        v-model="group"
        class="mb-2"
        active-text="B组"
        inactive-text="A组"
      />
      届数：
      <el-select v-model="semester">
        <el-option
          v-for="item of semesters"
          :key="item"
          :value="item"
          :label="item"
        />
      </el-select>
    </template>
    <!-- <div class="next-content"> -->
      <el-table class="next-content-table" :data="data" style="width: 100%" max-height="700px" ref="elTableRef">
        <el-table-column prop="rank" label="排名" width="80" fixed="left" />
        <el-table-column prop="major" label="专业" width="150" fixed="left" />
        <el-table-column prop="username" label="姓名" width="80" fixed="left" />
        <el-table-column prop="score" label="总分" width="80" fixed="left" />
        <el-table-column
          v-for="(item, idx) in row"
          :key="idx"
          :width="item.width"
          :label="item.label"
        >
          <template #default="scope">
            <el-popover
              v-if="scope.row[scope.column.label]"
              effect="light"
              trigger="hover"
              placement="top"
              width="auto"
            >
              <template #default>
                <div>{{ scope.row[scope.column.label]?.description }}</div>
              </template>
              <template v-if="scope.row[scope.column.label]?.score" #reference>
                <el-tag
                  v-if="scope.row[scope.column.label]"
                  :type="type(scope.row[scope.column.label]?.score)"
                  effect="dark"
                >
                  {{ scope.row[scope.column.label]?.score }}
                </el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    <!-- </div> -->
  </el-card>
</template>
<style scoped>
#score-rank-label {
  font-size: 28px;
  font-weight: 800;
  text-align: start;
  line-height: 1;
  padding-left: 20px;
  border-left: 5px solid #0691c4;
  color: #0691c4;
}

.box >>> .el-scrollbar__view {
  display: block !important;
  /* inline-block */
  /* margin-left: -110px; */
}
</style>
