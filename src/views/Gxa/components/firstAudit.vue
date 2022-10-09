<script setup>
import { ref } from 'vue';
import {getTeamIsApprove} from '@/api/gxaWork.js';
const result = ref(false)

getTeamIsApprove().then(res => {
    result.value = res.data.data
})

</script>
<template>
    <div>
        <el-result v-if="result == true" icon="success" title="初审通过" sub-title="恭喜您通过初审!请进一步完善您的作品" />
        <el-result v-else-if="result == false" icon="error" title="初审未通过" sub-title="很遗憾的通知您,您的作品初审未通过" />
        <el-result v-else icon="info" title="未审核" sub-title="请耐心等待审核" />
    </div>
</template>