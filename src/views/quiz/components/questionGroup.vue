<script setup>
import { useStore } from 'vuex';

const props = defineProps(['data'])
const emit = defineEmits(['toQuestion'])
const store = useStore()
const getQuestionDetail = (id, idx) => {
    emit('toQuestion', {id, idx})
}
const isHaveAns = (id) => {
    let ans = store.getters.getAnsByRealID(id)
    if(ans == 0) return false
    else return true
}
</script>

<template>
    <div id="question-group-continer">
        <el-button  class="question-group-item" v-for="(item, idx) in data" :type="isHaveAns(item)?'primary':''" @click="getQuestionDetail(item, idx)">{{idx + 1}}
        </el-button>
    </div>
</template>

<style>
#question-group-continer {
    display: flex;
    flex-wrap: wrap;
    /* justify-content:space-around; */
}

.question-group-item {
    /* border: 1px solid; */
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 12px;
}
</style>