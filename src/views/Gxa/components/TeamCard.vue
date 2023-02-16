<script setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { Delete, get, patch, post, put } from "@/requests/request";
import { getTeamInfo } from "@/api/gxaWork.js";
import { queryGxaStep } from '@/api/activeTime';
import { quitTeam } from "@/api/gxaTeam.js";
import TeamCardParticipator from "./TeamCardParticipator.vue";
const teamInfo = ref({});
const gxaStep = ref('');
const creatTeam = () => {
  post("/api/gxa_application/createApplicationForm", {
    teamName: teamInfo.value.teamName,
  })
    .then((res) => {
      ElMessage({
        type: "success",
        message: res.data.message,
      });
      init();
    })
    .catch((err) => {});
};
const state = ref(0);
const init = async () => {
  getTeamInfo().then((res) => {
    teamInfo.value = res.data.data;
    state.value = 1;
    get("/api/gxa_application/isLeader").then((res2) => {
      teamInfo.value.isLeader = res2.data.data;
    });
  }).catch((err) => {
    switch (err.code) {
      case -1:
        state.value = -1;
        break;
    }
  });
  const res = await queryGxaStep();
  gxaStep.value = res.data.data;
};
init();
const deleteTeam = () => {
  Delete("/api/gxa_application/deleteTeam").then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
    init();
  });
};
const cancelSubmitInfo = () => {
  get("/api/gxa_application/cancelApplication").then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
    init();
  });
};
const submitInfo = () => {
  updateTeamInfo();
  get("/api/gxa_application/sureApplication").then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
    init();
  });
};
const emit = defineEmits(["expand", "close"]);
const updateTeamInfo = () => {
  put("/api/gxa_application/updateGxaApplicationForm", {
    workName: teamInfo.value.workName,
    teamName: teamInfo.value.teamName,
    group: teamInfo.value.group,
    teamMemberSpecialty: teamInfo.value.teamMemberSpecialty,
    introductionToWorks: teamInfo.value.introductionToWorks,
  }).then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
  });
};

const showKickBtn1 = ref(false);
const showKickBtn2 = ref(false);
const kickOut = (event, id) => {
  patch("/api/gxa_application/kickOutOfTheTeam/" + id).then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
    init();
  });
};

const clickQuitTeam = () => {
  quitTeam().then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
  });
  init();
};
</script>
<template>
  <el-card>
    <div class="team-card-header card-title">我的队伍</div>
    <div class="team-card-close-btn" @click="emit('close')">
      <el-icon :size="28" color="#0691C4">
        <ArrowRightBold />
      </el-icon>
    </div>
    <div v-if="state == -1" id="create-team-continer">
      <el-form label-position="top">
        <el-form-item label="队伍名称">
          <el-input v-model="teamInfo.teamName"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="creatTeam">创建队伍</el-button>
    </div>
    <div v-if="state == 1">
      <el-scrollbar height="40vh">
        <el-tag size="large" class="team-card-title">
          <div>国信安杯&nbsp;第{{ teamInfo.session }}届</div>
        </el-tag>
        <div class="team-card-participator-group-continer">
          <TeamCardParticipator :user="teamInfo.leader"></TeamCardParticipator>
          <TeamCardParticipator
            :user="teamInfo.teamMember1"
            @mouseover="showKickBtn1 = true"
            @mouseleave="showKickBtn1 = false"
          >
            <template #second-card>
              <div v-show="showKickBtn1 && teamInfo.status === 0">
                <el-popconfirm
                  trigger="click"
                  title="确认踢出队友?"
                  @confirm="kickOut($event, teamInfo.teamMember1.studentId)"
                >
                  <template #reference>
                    <el-icon class="tema-card-kickout-btn" :size="25">
                      <CloseBold />
                    </el-icon>
                  </template>
                  <div>
                    <div>确认踢出队友?</div>
                    <el-button>确认</el-button>
                  </div>
                </el-popconfirm>
              </div>
            </template>
          </TeamCardParticipator>

          <TeamCardParticipator
            :user="teamInfo.teamMember2"
            @mouseover="showKickBtn2 = true"
            @mouseleave="showKickBtn2 = false"
          >
            <template #second-card>
              <div v-show="showKickBtn2  && teamInfo.status === 0">
                <el-popconfirm
                  trigger="click"
                  title="确认踢出队友?"
                  @confirm="kickOut($event, teamInfo.teamMember2.studentId)"
                >
                  <template #reference>
                    <el-icon class="tema-card-kickout-btn" :size="25">
                      <CloseBold />
                    </el-icon>
                  </template>
                  <div>
                    <div>确认踢出队友?</div>
                    <el-button>确认</el-button>
                  </div>
                </el-popconfirm>
              </div>
            </template>
          </TeamCardParticipator>
        </div>
        <div>
          <div class="card-title">团队名称</div>
          <div class="team-card-content">{{ teamInfo.teamName }}</div>
        </div>
        <div>
          <div class="card-title">参赛组别</div>
          <div class="team-card-content">
            {{ teamInfo.group ? "动态组" : "静态组" }}
          </div>
        </div>
        <div>
          <div class="card-title">团队特长</div>
          <div class="team-card-content">
            {{ teamInfo.teamMemberSpecialty }}
          </div>
        </div>
        <div>
          <div class="card-title">作品名称</div>
          <div class="team-card-content">{{ teamInfo.workName }}</div>
        </div>
        <div>
          <div class="card-title">作品简介</div>
          <div class="team-card-content">
            {{ teamInfo.introductionToWorks }}
          </div>
        </div>
        <!-- team leader show -->
        <div v-if="teamInfo.isLeader && gxaStep === 'GXA_register' && teamInfo.status === 0">
          <el-collapse @change="emit('expand')">
            <el-collapse-item name="changeInfo">
              <template #title>
                <div class="card-title">更改队伍信息</div>
              </template>
              <el-form label-position="top">
                <el-form-item label="队伍名称">
                  <el-input v-model="teamInfo.teamName"></el-input>
                </el-form-item>
                <el-form-item label="作品名称">
                  <el-input v-model="teamInfo.workName"></el-input>
                </el-form-item>
                <el-form-item label="参赛组别">
                  <el-switch
                    v-model="teamInfo.group"
                    active-text="动态组"
                    inactive-text="静态组"
                  >
                  </el-switch>
                </el-form-item>
                <el-form-item label="队伍特长">
                  <el-input
                    type="textarea"
                    :rows="5"
                    v-model="teamInfo.teamMemberSpecialty"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="作品简介">
                  <el-input
                    type="textarea"
                    :rows="5"
                    v-model="teamInfo.introductionToWorks"
                  >
                  </el-input>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-scrollbar>
      <!-- footer button group -->
      <div class="team-card-footer-continer">
        <div v-if="!teamInfo.isLeader" class="team-card-operator-group">
          <el-button type="danger" @click="clickQuitTeam">退出队伍</el-button>
        </div>
        <div v-else class="team-card-operator-group">
          <div v-if="gxaStep === 'GXA_register'">
            <el-button v-if="teamInfo.status === 0" type="success" @click="updateTeamInfo">
              更新信息
            </el-button>
              
            <el-button
              v-if="teamInfo.status === 0"
              type="primary"
              @click="submitInfo"
            >提交团队信息</el-button>
            <el-button
              v-else-if="teamInfo.status === 1"
              type="info"
              @click="cancelSubmitInfo"
            >取消提交团队信息</el-button>
            <el-button type="danger" @click="deleteTeam">解散队伍</el-button>
          </div>
          <div v-else>
            <el-button
              type="info"
              disabled
            >报名截止</el-button>
            <el-button disabled>报名截止、无法修改</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<style>
.team-card-header {
  font-size: 28px;
  font-weight: 800;
  height: 28px;
  color: #078fc6;
  margin-bottom: 25px;
}

.team-card-close-btn {
  position: absolute;
  top: 25px;
  right: 20px;
}

.team-card-title {
  /* background-color: red; */
  font-size: 20px;
  /* width: 60%; */
  margin: 10px 0;
}

.card-title {
  border-left: 5px solid #078fc6;
  padding-left: 5px;
  text-align: start;
  margin: 10px 0;
  user-select: none;
}

.team-card-participator-group-continer {
  display: flex;
  justify-content: center;
}

.tema-card-kickout-btn {
  position: relative;
  top: calc(25px / 2);
}

.team-card-operator-group {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.team-card-footer-continer {
  height: 40px;
  position: relative;
}

.team-card-content {
  width: 90%;
  white-space: pre-line;
  /* background-color: red; */
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  text-align: left;
}
</style>
