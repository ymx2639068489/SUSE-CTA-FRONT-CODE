<script setup>
import { getRankList } from '@/api/algorithm.js'
import { ref } from 'vue';
import Pagination from '../../../components/pagination/Pagination.vue';
const data = ref()
getRankList().then(res => {
    console.log(res.data.list);
    data.value = res.data.list
})
</script>
<template>
    <el-card>
        <template #header>
            <div id="score-rank-label">排行榜</div>
        </template>
        <el-table :data="data" style="width: 100%; background-color: red;">
            <el-table-column prop="id" label="Rank" width="80"></el-table-column>
            <el-table-column prop="major" label="专业" width="150"></el-table-column>
            <el-table-column prop="class" label="班级"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column prop="studentId" label="学号"></el-table-column>
            <el-table-column label="获奖等级">
                <template #default="scope">
                    {{scope.row.awardLevel == "firstPrize" ? "一等奖" : scope.row.awardLevel == "secondPrize" ? "二等奖" : "三等奖" }}
                </template>
            </el-table-column>
            <el-table-column prop="remarks" label="备注"></el-table-column>
        </el-table>
    </el-card>
</template>
<style>
#score-rank-label {
    font-size: 28px;
    font-weight: 800;
    text-align: start;
    line-height: 1;
    padding-left: 20px;
    border-left: 5px solid #0691C4;
    color: #0691C4;
}
</style>