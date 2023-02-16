<template>
  <div> {{ _message }}</div>
</template>

<script setup>
import { ref } from 'vue';
import { invite } from '@/api/gxaTeam';
import { ElMessage } from 'element-plus';
import { useRoute } from 'vue-router';
const route = useRoute();
const _message = ref('正在处理');
async function init() {
  const { from, fromUserId, qq, teamName } = route.query;
  try {
    const res = await invite({ fromUsername: from, fromUserId, qq, teamName });
    _message.value = res.data.message;
    ElMessage({ type: 'success', message: res.data.message });
  } catch (err) {
    _message.value = err.message;
  } 
}
init();
</script>

<style scoped>

</style>
