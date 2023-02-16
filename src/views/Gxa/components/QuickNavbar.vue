<template>
  <div id="quick-bar-root">
    <a href="#introduction" class="quick-bar-item-container">
      <div class="quick-bar-item">
        <span>赛事介绍</span>
      </div>
    </a>
    <a href="#award" class="quick-bar-item-container">
      <div class="quick-bar-item">
        <span>奖项设置</span>
      </div>
    </a>
    <a href="#process" class="quick-bar-item-container">
      <div class="quick-bar-item">
        <span>比赛流程</span>
      </div>
    </a>
  </div>
</template>
<style scoped>
#quick-bar-root {
  width: 90%;
  display: flex;
  justify-content: center;
  /* border: 1px solid; */
}

.quick-bar-item-container {
  margin: 0 60px;
  height: 100px;
  line-height: 100px;
  width: 200px;
  background-color: #0691c4;
  border-radius: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}

.quick-bar-item {
  color: white;
  font-size: 28px;
  font-weight: 800;
}
</style>
