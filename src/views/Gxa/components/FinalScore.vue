<script setup>
import { getTeamScore } from '@/api/gxaWork.js';
import { ref } from 'vue';
const score = ref([]);
const status = ref(0);
getTeamScore().then(res => {
  score.value = res.data.data;
  status.value = res.data.code == -2 ? false : true;
})
</script>
<template>
    <div v-show="status">
        <div>恭喜您,您的团队的得分:(满分70分, 共四名老师打分)</div>
        <div>{{score}}</div>
        <div>平均分：{{ score.reduce((p, v) => p + v, 0) / score.length }}</div>
    </div>
</template>
