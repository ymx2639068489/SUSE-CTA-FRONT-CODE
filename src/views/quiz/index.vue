<script setup>
import Ranklist from './components/ranklist.vue';
import Introdution from './components/introdution.vue';
import { startExam } from '@/api/quiz.ts'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { isRunningActive } from '@/api/activeTime.js'
import { ref } from 'vue';
const router = useRouter()
const store = useStore()
const ClickstartExam = async () => {
    await startExam().then(res => {
        let data = res.data.list
        store.commit('setQuestionData', data)
    })
    router.push('/quiz/exam')
}
const enable = ref(false)
isRunningActive('computer_knowledge_competition').then(res => {
    enable.value = res.data.data
})

</script>
<template>
    <div style="display:flex; justify-content: center; margin-top: 20px;">
        <div id="quiz-other-container">
            <Introdution></Introdution>
            <el-button :disabled="!enable" type="primary" id="quzi-start-bnt" @click="ClickstartExam">立即参赛</el-button>
        </div>
        <Ranklist id="quiz-rank-container"></Ranklist>
    </div>
</template>
<style>
#quiz-rank-container {
    width: 45%;
    margin-left: 20px;
}


#quiz-other-container {
    margin-left: 40px;
    width: 50%;
}

#quzi-start-bnt {
    width: 100%;
    margin-top: 20px;
    height: 80px;
    font-size: 46px;
    background-color: #0691C4;
}
</style>