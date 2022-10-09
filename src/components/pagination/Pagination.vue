<script setup>
import { ref, watchEffect } from 'vue';
const props = defineProps(['api'])
const emit = defineEmits(['getData'])
const list = ref([])
const currentPage = ref(1)
const total = ref(0)
const init = () => {
    props.api(currentPage.value, 10).then(res => {
        list.value = res.data.list
        total.value = res.data.total
        emit('getData', list.value)
    })
}
watchEffect(init)
</script>
<template>
    <el-pagination class="pagination" v-model:current-page="currentPage" layout="prev, pager, next" :total="total" />
</template>

<style>
.pagination {
    display: flex;
    justify-content: center;
}
</style>