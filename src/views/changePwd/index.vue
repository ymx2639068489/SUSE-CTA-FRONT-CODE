<script setup>
import { onMounted, ref } from 'vue';
import { updateUserPaaword, sendVerificationCode, getUserInfo } from '@/api/user'
import { ElMessage } from 'element-plus';
const data = ref({
    studentId: "",
    qq: "",
    password: "",
    code: "",
})

const submit = () => {
    updateUserPaaword(data.value).then(res => {
        ElMessage({
            type: "success",
            message: res.data.message
        })
    })
}

const sendEmailCode = () => {
    sendVerificationCode({qq: data.value.qq, studentId: data.value.studentId}).then(res => {
        ElMessage({
            type: "success",
            message: res.data.message,
        })
    })
}

const init = () => {
    getUserInfo().then(res => {
        data.value.qq = res.data.data.qq
        data.value.studentId = res.data.data.studentId
    })
}

onMounted(init)


</script>
<template>
    <div id="change-pwd-container">
        <el-card id="change-pwd-card">
            <el-form label-position="top">
                <el-form-item label="学号">
                    <el-input v-model="data.studentId" disabled></el-input>
                </el-form-item>
                <el-form-item label="qq">
                    <el-input v-model="data.qq" disabled></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="data.code">
                        <template #suffix>
                            <el-button text  @click="sendEmailCode">发送验证码</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input show-password v-model="data.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="submit" type="primary">修改密码</el-button>
        </el-card>
    </div>
</template>

<style>
#change-pwd-container {
    display: flex;
    justify-content: center;
}

#change-pwd-card {
    width: 600px;
    margin-top: 40px;
}
</style>