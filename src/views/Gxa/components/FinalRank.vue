<script setup>
import { getPreviousWinnerList } from '@/api/privousWinner.js';
import { ref } from 'vue';


const data = ref([])

getPreviousWinnerList({ competitionName: "国信安", session: new Date().getFullYear() - 1 }).then(res => {
    let list = res.data.list
    let mp = new Map()

    list.forEach(element => {

        if (mp.has(element.remarks) == false) {
            mp.set(element.remarks, {
                groupName: element.remarks,
                member: [element.username],
                awardLevel: element.awardLevel,
            })
        } else {
            mp.get(element.remarks).member.push(element.username)
        }
    });
    mp.forEach((key, value) => {
        data.value.push(key)
    })
})

function getLevel(level) {

    let mp = new Map([['firstPrize', "一等奖"], ['secondAward', "二等奖"], ['thirdAward', "三等奖"], ['excellentAward', "优秀奖"], ['participationAward', "参与奖"]])
    return mp.get(level)
}
</script>

<template>
    <div>
        <el-table id="final-competition-rank" :data="data">
            <el-table-column prop="groupName" label="团队名称"></el-table-column>
            <el-table-column prop="member[0]" label="队员一"></el-table-column>
            <el-table-column prop="member[1]" label="队员二"></el-table-column>
            <el-table-column prop="member[2]" label="队员三"></el-table-column>
            <el-table-column label="获奖等级">
                <template #default="scope">
                    {{getLevel(scope.row.awardLevel)}}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>