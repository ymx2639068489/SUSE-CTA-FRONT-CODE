<script setup>
import { ref } from 'vue';

const result = ref(false)
</script>
<template>
    <div>
        <el-result v-if="result" icon="success" title="初审通过" sub-title="恭喜您通过初审!请进一步完善您的作品">

        </el-result>
        <el-result v-else icon="error" title="初审未通过" sub-title="很遗憾的通知您,您的作品初审未通过">

</el-result>
    </div>
</template>