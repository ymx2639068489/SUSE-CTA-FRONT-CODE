<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import QuestionGroup from './components/questionGroup.vue';
import Question from './components/question.vue'
import { submitAnswer } from '@/api/quiz.ts'
const store = useStore()
const activeNames = ref(['1', '2', '3'])
const ques = computed(() => store.getters.getQuestionData)
const init = () => {
    data.value = {
        signalChoice: ques.value.slice(0, 40),
        multiplyChoice: ques.value.slice(40, 60),
        judge: ques.value.slice(60, 80),
    }
}
const data = ref({
    signalChoice: [],
    multiplyChoice: [],
    judge: [],
})
const isShowQuestion = ref(false)
const nowQuestionID = ref(0)
const currentQuestionIdx = ref('1')
const currentQuestionType = ref(1)
const toQuestion = ({ id, idx }, type) => {

    nowQuestionID.value = id
    currentQuestionIdx.value = idx
    currentQuestionType.value = type
    isShowQuestion.value = true
}

const pre = () => {
    if (currentQuestionType.value == 1 && currentQuestionIdx.value == 0) return
    currentQuestionIdx.value--
    if (currentQuestionIdx.value == -1) {
        if (currentQuestionType.value > 1)
            currentQuestionType.value--
        let t = [0, 39, 19, 19]
        currentQuestionIdx.value = t[currentQuestionType.value]
    }
    nowQuestionID.value = currentQuestionType.value == 1 ? data.signalChoice[currentQuestionIdx.value] : currentQuestionType.value == 2 ? data.multiplyChoice[currentQuestionIdx.value] : data.judge[currentQuestionIdx.value]
}

const next = () => {
    if (currentQuestionType.value == 3 && currentQuestionIdx.value == 19) return
    currentQuestionIdx.value++
    let t = [0, 39, 19, 19]
    if (currentQuestionIdx.value > t[currentQuestionType.value]) {
        currentQuestionType.value++
        currentQuestionIdx.value = 0
    }
    nowQuestionID.value = currentQuestionType.value == 1 ? data.signalChoice[currentQuestionIdx.value] : currentQuestionType.value == 2 ? data.multiplyChoice[currentQuestionIdx.value] : data.judge[currentQuestionIdx.value]
}

const submitAns = () => {
    let ansMap = computed(() => store.getters.getAllAns)
    submitAnswer(Object.fromEntries(ansMap.value)).then(res => {
        console.log(res);
    })
}
onMounted(init)
</script>

<template>
    <div v-if="data.signalChoice.length" id="question-continer">
        <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
                <template #title>
                    <span class="question-group-label">单选题</span>
                </template>
                <QuestionGroup :data="data.signalChoice" @to-question="toQuestion($event, 1)"></QuestionGroup>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template #title>
                    <span class="question-group-label">多选题</span>
                </template>
                <QuestionGroup :data="data.multiplyChoice" @to-question="toQuestion($event, 2)"></QuestionGroup>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template #title>
                    <span class="question-group-label">判断题</span>
                </template>
                <QuestionGroup :data="data.judge" @to-question="toQuestion($event, 3)"></QuestionGroup>
            </el-collapse-item>
        </el-collapse>
        <el-button id="question-list-submit" @click="submitAns">完成作答</el-button>
    </div>
    <div v-else>
        请重新获取题目
    </div>
    <el-dialog v-model="isShowQuestion" :show-close="false">
        <template #header>
            <el-page-header @back="isShowQuestion = false">
            </el-page-header>
        </template>
        <Question :id="nowQuestionID" :key="nowQuestionID" @pre="pre" @next="next"></Question>
    </el-dialog>
</template>

<style>
#question-continer {
    /* background-color: red; */
    width: 100%;
    height: 100%;
}

.question-group-label {
    font-size: 18px;
    border-left: 5px solid #0691C4;
    padding-left: 10px;
}


#question-list-submit {
    position: absolute;
    bottom: 20px;
    left: 25%;
    text-align: start;
    background-color: #0691C4;
    color: white;
    font-size: 28px;
    width: 50%;
    height: 40px;
}
</style>