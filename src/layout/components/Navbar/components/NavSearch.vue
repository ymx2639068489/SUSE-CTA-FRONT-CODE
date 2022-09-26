<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const value = ref('')
const router = useRouter()
const toPath = () => {
        router.push({ path: "/journalism", query: { content: value.value } })
        value.value = ""
}
</script>
<template>
        <div id="nav-search-continer">
                <el-input v-model="value" placeholder="Enter someone" @keyup.enter="toPath">
                        <template #suffix>
                                <el-icon>
                                        <Search @click="toPath"  />
                                </el-icon>
                        </template>
                </el-input>
        </div>
</template>
<style scoped>

</style>
