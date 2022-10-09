<script setup>
import {getFormulaGxaList} from '@/api/gxaWork.js';
import { ref } from 'vue';
import WorkTable from './workTable.vue';
import FinalScore from './FinalScore.vue';

const data = ref({static:[],dynamic:[]})
getFormulaGxaList().then(res => {
    data.value = res.data.data;
})

</script>

<template>
    <FinalScore></FinalScore>
    <div class="work-title">作品公示</div>
    <div>
        <div class="work-label">动态组</div>
        <WorkTable :data="data.dynamic"></WorkTable>
    </div>
    <div>
        <div class="work-label">静态组</div>
        <WorkTable :data="data.static"></WorkTable>
    </div>
</template>

<style>

.work-title {
    font-size: 36px;
    line-height: 1.0;
    margin: 20px 0;
    font-weight: 800;
}
.work-label {
    font-size: 24px;
    line-height: 1.0;
    margin: 20px 0;
}
</style>