<script setup>
import svgLabel from "@/components/label/svgLabel.vue";
import { queryGxaStep } from "@/api/activeTime.js";
import { ref } from "vue";
import labImg from "@/assets/svg/process.svg";
import SubmitWork from "./SubmitWork.vue";
import FirstAudit from "./firstAudit.vue";
import DetailStep from "./DetailStep.vue";
import WorkShow from "./workShow.vue";
import FinalCompetition from "./FinalCompetition.vue";
import FinalRank from "./FinalRank.vue";
const nowActiveStep = ref(-1);
const step = [
  "GXA_register",
  "GXA_works",
  "GXA_approve",
  "GXA_works_scoring",
  "GXA_finals",
  "GXA_end",
];
queryGxaStep().then((res) => {
  step.forEach((v, idx) => {
    if (v == res.data.data) {
      nowActiveStep.value = idx;
    }
  });
});
</script>
<template>
  <div id="gxa-process-container">
    <svgLabel :svg="labImg" title="比赛流程"></svgLabel>
    <div id="gxa-process-body">
      <div id="gxa-process">
        <el-steps
          id="process-step"
          :active="nowActiveStep"
          process-status="process"
          finish-status="success"
          :align-center="true"
          :simple="true"
        >
          <el-step title="开始报名">
            <template #icon class="step-icon">
              <el-icon>
                <EditPen />
              </el-icon>
            </template>
          </el-step>
          <el-step title="提交作品">
            <template #icon class="step-icon">
              <el-icon>
                <Position />
              </el-icon>
            </template>
          </el-step>
          <el-step title="作品初审">
            <template #icon class="step-icon">
              <el-icon>
                <Histogram />
              </el-icon>
            </template>
          </el-step>
          <el-step title="作品公示">
            <template #icon class="step-icon">
              <el-icon>
                <View />
              </el-icon>
            </template>
          </el-step>
          <el-step title="决赛比拼">
            <template #icon class="step-icon">
              <el-icon>
                <Finished />
              </el-icon>
            </template>
          </el-step>
          <el-step title="比赛结束">
            <template #icon class="step-icon">
              <el-icon>
                <Trophy />
              </el-icon>
            </template>
          </el-step>
        </el-steps>
        <div id="gxa-process-main">
          <div v-if="nowActiveStep == 0" id="gxa-process-setp-one">
            <DetailStep></DetailStep>
          </div>
          <SubmitWork v-else-if="nowActiveStep == 1"></SubmitWork>
          <FirstAudit v-else-if="nowActiveStep == 2"></FirstAudit>
          <WorkShow v-else-if="nowActiveStep == 3"></WorkShow>
          <FinalCompetition v-else-if="nowActiveStep == 4"></FinalCompetition>
          <FinalRank v-else-if="nowActiveStep == 5"></FinalRank>
          <div v-else>
            <h1>报名已结束,请完善您的作品</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#gxa-process-container {
  width: 100%;
  position: relative;
}

#gxa-process-body {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  min-height: 600px;
  margin-bottom: 20px;
}

#gxa-process {
  background-color: white;
  border: 1 solid #e4e7ed;
  border-radius: 5px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  width: 90%;
}

#process-step {
  height: 60px;
  padding: 0;
  user-select: none;
}
</style>
