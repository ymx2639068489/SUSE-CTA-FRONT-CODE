<script setup>
import {  ref } from "vue";
import { useStore } from "vuex";
import OptionButton from "../../../components/button/OptionButton.vue";
import { getQuestionDetailByID } from '@/api/quiz.ts'
const store = useStore()
const porps = defineProps(['id'])
const op = ref([false, false, false, false])
const data = ref()
getQuestionDetailByID(porps.id).then(res => {
    data.value = res.data.data
    init()
})
const init = () => {
    let ans = store.getters.getAnsByRealID(data.value.id)
    let idx = 4
    while (ans) {
        idx--
        if (ans & 1) {
            op.value[idx] = true
        }
        ans >>= 1
    }
}
const choice = (o) => {
    let ans = store.getters.getAnsByRealID(data.value.id)
    if (data.value.type == 2) {
        let idx = 4
        let t = o
        while (t) {
            t >>= 1
            idx--
        }
        op.value[idx] = op.value[idx] ? false : true
        if ((ans & o) == 0) {
            ans += o
        } else {
            ans -= o
        }
    } else {
        op.value = [false, false, false, false]
        let idx = 4
        let t = o
        while (t) {
            t >>= 1
            idx--
        }
        op.value[idx] = true
        ans = o
    }
    store.commit('setAns', { id: data.value.id, ans })
    // store.getters.getAllAns
}
</script>
<template>
    <div v-if="data">
        <div class="question-detail-lable">题目描述</div>
        <div><span id="question-detail-topic">{{data.topic}}</span></div>
        <div class="question-detail-lable">题目选项</div>
        <div>
            <div v-if="data.type == 1 || data.type == 2">
                <div class="question-detail-item" @click="choice(8)">
                    A:
                    <OptionButton class="question-detail-option">
                        {{data.optionA}}
                    </OptionButton>
                    <el-icon v-if="op[0]">
                        <Check />
                    </el-icon>
                </div>
                <div class="question-detail-item">
                    B:
                    <OptionButton class="question-detail-option" @click="choice(4)">
                        {{data.optionB}}
                    </OptionButton>
                    <el-icon v-if="op[1]">
                        <Check />
                    </el-icon>
                </div>
                <div class="question-detail-item">
                    C:
                    <OptionButton class="question-detail-option" @click="choice(2)">
                        {{data.optionC}}
                    </OptionButton>
                    <el-icon v-if="op[2]">
                        <Check />
                    </el-icon>
                </div>
                <div class="question-detail-item">
                    D:
                    <OptionButton class="question-detail-option" @click="choice(1)">
                        {{data.optionD}}
                    </OptionButton>
                    <el-icon v-if="op[3]">
                        <Check />
                    </el-icon>
                </div>
            </div>
            <div v-else>
                <div class="question-detail-item">
                    <OptionButton class="question-detail-option" @click="choice(8)">
                        正确
                    </OptionButton>
                    <el-icon v-if="op[0]">
                        <Check />
                    </el-icon>
                </div>
                <div class="question-detail-item">
                    <OptionButton class="question-detail-option" @click="choice(4)">
                        错误
                    </OptionButton>
                    <el-icon v-if="op[1]">
                        <Check />
                    </el-icon>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.question-detail-lable {
    text-align: start;
    font-size: 24px;
    border-left: 5px solid #0691C4;
    padding-left: 20px;
}

.question-detail-option {
    width: 80%;
    font-size: 20px;
}

.question-detail-item {
    margin: 10px 0;
}

#question-detail-topic {
    font-size: 20px;
    user-select: none;
}
</style>