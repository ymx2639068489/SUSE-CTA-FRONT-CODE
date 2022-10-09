<script setup>
import { getTeamScore } from '@/api/gxaWork.js';
import { ref } from 'vue';
const score = ref(0);
const status = ref(0);
getTeamScore().then(res => {
    score.value = res.data.data;
    status.value = res.data.code == -2 ? false : true;
})
</script>
<template>
    <div v-show="status">
        <div>恭喜您,您的团队的得分:</div>
        <div>{{score}}</div>
    </div>
</template>