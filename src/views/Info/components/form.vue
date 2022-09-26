<script setup>
import { getCollerList, getUserInfo } from '@/api/user.js'
import { getClassOptions } from '@/tools/data.js';
import { put } from '@/requests/request.js'
import {  onMounted, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';

const store = useStore()
const collerList = ref([])
const Class = ref([])
const info = ref({})
const init = () => {
    getUserInfo().then(res => {
        let data = res.data.data
        info.value = data
        Class.value = [parseInt(data.class.substring(0, 4)), parseInt(data.class.substring(4, 5))]
    })
    getCollerList().then(res => {
        collerList.value = res.data.data
    })
}

const props = {
    expandTrigger: 'hover',
}

const classOptions = getClassOptions()

const getForm = () => {
    return {
        username: info.value.username,
        college: info.value.college,
        gender: info.value.gender,
        major: info.value.major,
        class: Class.value[0] + "" + Class.value[1],
        qq: info.value.qq,
        phoneNumber: info.value.phoneNumber,
        avatarUrl: info.value.avatarUrl,
    }
}

const submit = () => {
    put('/api/users/updateUserInfo', getForm()).then(res => {
        ElMessage({
            type: "success",
            message: "更新成功"
        })
    })
}

const majorList = ref([])

watchEffect(() => {
    for (let item of collerList.value) {
        if (item.name == info.value.college) {
            majorList.value = item.major
        }
    }

})
onMounted(init)
</script>
<template>
    <el-card>
        <template #header>
            <span>个人信息</span>
        </template>
        <el-form>
            <el-form-item>
                <el-input class="input" v-model="info.username" disabled>
                    <template #prefix>
                        <span>
                            姓名
                        </span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input class="input" v-model="info.studentId" disabled>
                    <template #prefix>
                        <span>
                            学号
                        </span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <span>男</span>
                <el-switch v-model="info.gender" active-icon="Female" inactive-icon="Male" /><span>女</span>
            </el-form-item>

            <el-form-item>
                <el-select class="input" v-model="info.college" size="large" @change="() => info.major = ''">
                    <template #prefix>
                        <span>
                            学院
                        </span>
                    </template>
                    <el-option v-for="item in collerList" :key="item.name" :value="item.name" :label="item.name" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-select class="input" v-model="info.major" size="large">
                    <template #prefix>
                        <span>专业</span>
                    </template>
                    <el-option v-for="(item, idx) in majorList" :key="idx" :value="item" :label="item.name" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-cascader class="input" v-model="Class" :options="classOptions" :props="props" placeholder="班级"
                    size="large">
                </el-cascader>
            </el-form-item>
            <el-form-item>
                <el-input class="input" v-model="info.phoneNumber" size="large">
                    <template #prefix>
                        <span>
                            手机
                        </span>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input class="input" v-model="info.qq" size="large">
                    <template #prefix>
                        <span>
                            QQ
                        </span>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <el-row id="info-btn-group">
            <el-button class="btn" type="primary" @click="submit">
                立即修改
            </el-button>
        </el-row>
    </el-card>
</template>
<style>
.input {
    width: 100%;
}

.input-row {
    justify-content: start;
}

.avatar-box {
    width: 100%;
    position: relative;
    top: 100px;
    /* background-color: green; */
}

#info-btn-group {
    margin-top: 40px;
    width: 100%;

}

.btn {
    width: 25%;
}
</style>