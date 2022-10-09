<script setup>
import { getRankList } from '@/api/quiz.ts'
import Pagination from '@/components/pagination/Pagination.vue';
import { formatDuring } from '@/utils/timeFormat.js'
import { ref } from 'vue';
const list = ref([])
const init = (data) => {
    list.value = data.map(item => {
        item.totalDuration = formatDuring(item.totalDuration)
        return item
    })
}
</script>
<template>
    <el-card style="position: relative;">
        <template #header>
            <div id="ranklist-label">排行榜</div>
        </template>
        <el-table :data="list" style="width: 100%">
            <el-table-column prop="studentId" label="学号" />
            <el-table-column prop="score" label="得分" />
            <el-table-column prop="totalDuration" label="完成时间" />
        </el-table>
        <Pagination id="ranklist-pagination" :api="getRankList" @get-data="init"></Pagination>
    </el-card>
</template>
<style>
#ranklist-pagination {
    position: absolute;
    bottom: 20px;
    width: 100%;
}

#ranklist-label {
    font-size: 28px;
    font-weight: 800;
    text-align: start;
    line-height: 1;
    padding-left: 20px;
    border-left: 5px solid #0691C4;
    color: #0691C4;
}
</style>