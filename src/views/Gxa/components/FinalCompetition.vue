<script setup>
import { getPreviousWinnerList } from '@/api/privousWinner.js';
import { ref } from 'vue';


const data = ref([])

getPreviousWinnerList({ competitionName: "国信安", session: new Date().getFullYear() }).then(res => {
    let list = res.data.list
    let mp = new Map()
    console.log(res.data.data);
    list.forEach(element => {
        if (mp.has(element.remarks) == false) {
            mp.set( element.remarks, {
                groupName: element.remarks,
                member: [element.username],
               
            })
        } else {
            mp.get(element.remarks).member.push(element.username)
        }
    });
    mp.forEach((key, value) => {
        data.value.push(key)
    })
})
</script>

<template>
    <div id="final-competition-container">
        <div id="final-competition-detail">
            <p>恭喜以下队伍进入决赛, 请关注群内信息, 按时参加决赛!</p>
        </div>
        <el-table id="final-competition-rank" :data="data">
            <el-table-column prop="groupName" label="团队名称"></el-table-column>
            <el-table-column prop="member[0]" label="队员一"></el-table-column>
            <el-table-column prop="member[1]" label="队员二"></el-table-column>
            <el-table-column prop="member[2]" label="队员三"></el-table-column>
            
        </el-table>
    </div>
</template>

<style>
#final-competition-container {}

#final-competition-rank {}

#final-competition-detail {}
</style>