<script setup>
import { ref } from "vue";
import TeamCard from "./components/TeamCard.vue";
import GroupInfo from "./components/GroupInfo.vue";
import Introduction from "./components/Introduction.vue";
import Award from "./components/Award.vue";
import QuickNavbar from "./components/QuickNavbar.vue";
import Process from "./components/Process.vue";
import { getGxaBanner } from "@/api/banner.js";
const styleState = ref(true);
const changeTeamCardStyle = () => {
  styleState.value = !styleState.value;
};
const isShowTeamCard = ref(false);

const carouselData = ref([]);

getGxaBanner().then((res) => {
  let list = res.data.data;
  carouselData.value = list;
});
</script>
<template>
  <div id="root">
    <div
      v-if="!isShowTeamCard"
      id="gxa-team-btn"
      @click="isShowTeamCard = true"
    >
      <img
        src="/src/assets/svg/team.svg"
        alt=""
        style="widtth: 100%; aspect-ratio: 1 / 1"
      />
      <span>我的</span>
      <span>团队</span>
    </div>
    <TeamCard
      v-if="isShowTeamCard"
      :class="{ 'team-card-one': styleState, 'team-card-tow': !styleState }"
      @expand="changeTeamCardStyle"
      @close="isShowTeamCard = false"
    >
    </TeamCard>

    <div class="gxa-container">
      <el-carousel id="gxa-carousel" height="60vh">
        <el-carousel-item v-for="item in carouselData" :key="item.url">
          <a :href="item.href">
            <img
              :src="item.url"
              style="object-fit: fill; width: 100%; height: 100%"
              alt="加载中"
            />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="gxa-container">
      <GroupInfo></GroupInfo>
    </div>
    <div class="gxa-container" style="margin-top: 40px">
      <QuickNavbar></QuickNavbar>
    </div>
    <div class="gxa-container" id="introduction">
      <Introduction></Introduction>
    </div>
    <div class="gxa-container" id="award">
      <Award></Award>
    </div>
    <div class="gxa-container" id="process">
      <Process />
    </div>
  </div>
</template>
<style scoped>
#root {
  width: 100%;
  /* min-width: 1600px; */
}

#gxa-team-btn {
  position: fixed;
  right: 20px;
  bottom: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  /* background-color: #9ADCF9; */
  /* font-size: 18px; */
  font-weight: 800;
  border: 1px solid #e4e7ed;
  border-radius: 5px;

  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  width: 50px;
  z-index: 2000;
}

.team-card-one {
  width: 400px;
  position: fixed;
  right: 20px;
  top: 25vh;
  transition: 1s;
  z-index: 1000;
}

.team-card-tow {
  width: 1000px;
  position: fixed;
  right: calc(50% - 500px);
  top: 25vh;
  transition: 1s;
  z-index: 1000;
}

.gxa-container {
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 25px;
}

#gxa-carousel {
  width: 90%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  background-color: white;
  border: 1px solid #e4e7ed;
  border-radius: 5px;
}
</style>
