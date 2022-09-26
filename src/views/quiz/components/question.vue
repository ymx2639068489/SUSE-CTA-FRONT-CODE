<script setup>
import QuestionMain from './questionMain.vue';
const emit = defineEmits(['pre', 'next'])
const props = defineProps(['id'])

</script>
<template>
    <div>
        <QuestionMain :id="id"></QuestionMain>
        <div style="margin: 20px 0; position: relative; height: 10px;">
            <el-button style="position: absolute; left: 0;" type="primary" @click="$emit('pre')">上一题</el-button>
            <el-button style="position: absolute; right: 0;" type="primary" @click="$emit('next')">下一题</el-button>
        </div>
    </div>
</template>
<style>


#question-detail {
    margin-top: 20px;
}
</style>