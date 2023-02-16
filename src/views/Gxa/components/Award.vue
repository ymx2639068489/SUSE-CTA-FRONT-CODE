<script setup>
import labImg from "@/assets/svg/award.svg";
import svgLabel from "@/components/label/svgLabel.vue";
import tool from "@/utils/assets.js";
</script>
<template>
  <div id="gxa-award-container">
    <svgLabel :svg="labImg" title="奖项设置"></svgLabel>
    <img :src="tool.getAssetsFile('award.png')" alt="" id="gxa-award-img" />
  </div>
</template>
<style scoped>
#gxa-award-container {
  width: 100%;
  position: relative;
}

#gxa-award-body {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  min-height: 600px;
}

#gxa-award-img {
  width: 90%;
  margin-top: 20px;
  user-select: none;
  background-color: white;

  border: 0px solid #e4e7ed;
  border-radius: 5px;

  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

.gxa-award-title {
  font-size: 28px;
  font-weight: 600;
}
</style>
