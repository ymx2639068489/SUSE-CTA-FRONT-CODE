<script setup>
import { ref } from 'vue';
import { post, get } from '@/requests/request';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { encryptByMd5 } from '@/utils/encrypt.js'
const emit = defineEmits(['toRegister', 'loginSuccess'])
const router = useRouter()
const store = useStore()
const formData = ref({
    username: "",
    password: ""
})

const formRules = {
    username: [
        {
            validator: (rule, value, callback) => {
                if (value.length != 11) {
                    callback(new Error('学号位数不正确'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ],
    password: [
        {}
    ],
}

const clickRegisterBtn = () => {
    emit("toRegister")
}

const clickLoginBtn = () => {
    let pwd = encryptByMd5(formData.value.password)
    post('/api/users/login', { username: formData.value.username, password: pwd }).then(res => {
        let data = res.data
        localStorage.setItem('token', data.data)
        ElMessage({
            type: "success",
            message: data.message,
        })
        get('/api/users/getUserInfo').then(res => {
            store.commit('setUserInfo', res.data.data)
        })
        router.push('/')
        emit("loginSuccess")
    })
}


const loginType = ref(true)


const pwdLogin = () => {
    loginType.value = true
}

const smsLogin = () => {
    loginType.value = false
}



</script>
<template>
    <div class="login">
        <div class="header">
            <el-space spacer="|">
                <el-button :class="{ 'pwd-login': true, black: loginType }" type="primary" text @click="pwdLogin">密码登陆
                </el-button>
                <el-button :class="{ 'sms-login': true, black: !loginType }" type="primary" text @click="smsLogin">短信登陆
                </el-button>
            </el-space>
        </div>
        <!-- 默认登陆方式 -->
        <el-form v-if="loginType" class="form" :model="formData" :rules="formRules">
            <el-form-item prop="username">
                <template #label>
                    <span class="label">学号 </span>
                </template>
                <el-input class="input" size="large" v-model="formData.username" placeholder="" />
            </el-form-item>
            <el-form-item prop="password">
                <template #label>
                    <span class="label">密码</span>
                </template>
                <el-input class="input" size="large" v-model="formData.password" placeholder="" show-password />
            </el-form-item>
            <el-form-item>
                <div style="display: flex; justify-content: center; width: 100%">
                    <el-button class="btn" size="large" @click="clickRegisterBtn" style="width: 50%;">注 册</el-button>
                    <el-button class="btn" size="large" type="primary" style="color:white; width: 50%;"
                        @click="clickLoginBtn">登 录
                    </el-button>
                </div>
            </el-form-item>
        </el-form>
        <!-- 第二登陆方式 -->
        <el-form v-else="loginType">
            <el-form-item class="form">
                <template #label>
                    <span class="label">手机号 </span>
                </template>

                <el-input class="input" size="large" v-model="schoolNumber" placeholder="">
                    <template #append>
                        <el-button text>发送验证码</el-button>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <template #label>
                    <span class="label">验证码</span>
                </template>
                <el-input class="input" size="large" v-model="password" placeholder="" show-password />
            </el-form-item>
            <el-form-item>
                <el-col :span="12">
                    <el-button class="btn" size="large" @click="clickRegisterBtn">注 册</el-button>
                </el-col>
                <el-col :span="12">
                    <el-button class="btn" size="large" type="primary" @click="clickLoginBtn">登 录</el-button>
                </el-col>
            </el-form-item>
        </el-form>
        <div class="footer">
            <span>登陆及注册即代表您以同意</span><span><a>用户条款</a></span><span>和</span><span><a>隐私政策</a></span>
        </div>
    </div>
</template>
<style scoped>
.login {
    background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/33_open.43a09438.png);
    background-position: 100% 100%;
    background-position-x: 100%;
    background-position-y: 100%;
    background-repeat: no-repeat;
    background-size: 10%;
}

.label {
    width: 120px;
    font-size: 18px;
}

.form {
    margin-top: 20px;
}

.header {
    display: flex;
    justify-content: center;
}

.input {
    font-size: 20px;
}

.btn {
    font-size: 18px;
    width: 90%;
}

.pwd-login {
    font-size: 20px;
}

.sms-login {
    font-size: 20px;
}

.footer {
    margin-top: 60px;
    display: flex;
    justify-content: center;
}
</style>