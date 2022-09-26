<script setup>
import { ref } from 'vue'
import { post } from '@/requests/request.js'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { encryptByMd5 } from '@/utils/encrypt.js'
import Avatar from '@/components/avatar/Avatar.vue';


const emit = defineEmits(['toLogin', 'registerSuccess'])
const router = useRouter()
const formData = ref({
    username: "",
    studentId: "",
    password: "",
    secondPassword: "",
    qq: "",
    avatar: "https://pic3.zhimg.com/50/v2-588f36e96451c6487478cc07640e2f9d_hd.jpg?source=1940ef5c",
})

const getFormData = () => {
    return {
        username: formData.value.username,
        studentId: formData.value.studentId,
        password: encryptByMd5(formData.value.password),
        qq: formData.value.qq,
        avatarUrl: formData.value.avatar
    }
}

const formRules = {
    username: [
        {}
    ],
    studentId: [
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
    secondPassword: [
        {
            validator: (rule, value, callback) => {
                if (value != formData.value.password) {
                    callback(new Error('两次密码不一致'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ],
    qq: [
        {}
    ]
}


const register = () => {
    if (formData.value.password != formData.value.secondPassword) {
        ElMessage({
            type: "error",
            message: "两次密码不一致"
        })
    }
    post('/api/users/register', getFormData()).then(res => {
        ElMessage({
            type: "success",
            message: "注册成功"
        })
        emit('registerSuccess')
        router.push('/')
    })
}

const clickToLoginBtn = () => {
    emit("toLogin")
}

const handleAvatarSuccess = (response) => {
    let data = response.data[0];
    formData.value.avatar = data.Host + "/" + data.RelativePath
}

const beforeAvatarUpload = () => {

}

</script>
<template>
    <div class="register">
        <el-col :span="8" style="display:flex; justify-content: center;">
            <el-upload action="https://yibindfxy.top:444/application/upload/file" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" name="file[]">
                <div id="avatar-box">
                    <Avatar :avatar="formData.avatar">
                        <template #mask-text>
                            <div id="mask-text">
                                上传头像<el-icon>
                                    <Upload />
                                </el-icon>
                            </div>
                        </template>
                    </Avatar>
                </div>
            </el-upload>
        </el-col>
        <el-col :span="16">
            <el-form label-width="80px" label-position="left" :model="formData" :rules="formRules">
                <el-form-item prop="username">
                    <template #label>
                        <span class="label">姓名</span>
                    </template>
                    <el-input class="input" size="large" v-model="formData.username" />
                </el-form-item>
                <el-form-item prop="studentId">
                    <template #label>
                        <span class="label">学号</span>
                    </template>
                    <el-input class="input" size="large" v-model="formData.studentId" />
                </el-form-item>
                <el-form-item prop="password">
                    <template #label>
                        <span class="label">密码</span>
                    </template>
                    <el-input class="input" size="large" v-model="formData.password" show-password />
                </el-form-item>
                <el-form-item label="确认密码" prop="secondPassword">
                    <template #label>
                        <span class="label">确认密码</span>
                    </template>
                    <el-input class="input" size="large" v-model="formData.secondPassword" show-password />
                </el-form-item>
                <el-form-item prop="phone">
                    <template #label>
                        <span class="label">QQ号</span>
                    </template>
                    <el-input class="input" size="large" v-model="formData.qq" />
                </el-form-item>
                <el-form-item>
                    <el-col>
                        <el-row>
                            <el-button class="btn" type="primary" @click="register" size="large">立即注册</el-button>
                        </el-row>
                        <el-row style="justify-content: right">
                            <el-button class="btn-to-login" text @click="clickToLoginBtn" size="large">已有账号?</el-button>
                        </el-row>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>
<style scoped>
#avatar-box {
    display: flex;
    width: 8vw;
    aspect-ratio: 1 / 1;
    justify-content: center;
    /* background-color: red; */
    margin-left: 20px;
}

.btn {
    width: 100%;
}

#mask-text {
    display: flex;
    justify-content: center;
}

.register {
    background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/22_open.72c00877.png);
    background-position: 0% 0%;
    background-position-x: 0%;
    background-position-y: 100%;
    background-repeat: no-repeat;
    background-size: 20%;
    display: flex;
}

.label {
    background-color: #409EFF;
    color: white;
    border: 1 solid;
    border-radius: 8px;
    width: 100px;
    display: flex;
    justify-content: center;
    font-size: 16px;
}

.btn {
    width: 100%;
}

.btn-to-login {
    width: 25%;
}
</style>