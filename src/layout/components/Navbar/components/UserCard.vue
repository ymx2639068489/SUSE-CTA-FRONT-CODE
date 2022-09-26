<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Login from './Login.vue';
import Register from './Register.vue';
import Button from '@/components/button/Button.vue'

const store = useStore()
const router = useRouter()

const loginStatus = computed(() => {
    return store.getters.getUserLoginStatus
})
const info = computed(() => store.getters.getUserInfo)


const loginDialogVisible = ref(false)
const registerDialogVisible = ref(false)
const clickLogin = () => {
    loginDialogVisible.value = true
    registerDialogVisible.value = false
}

const clickRegister = () => {
    registerDialogVisible.value = true
    loginDialogVisible.value = false
}

const clickAvatar = () => {
    console.log('111');
    router.push('/space')
}

const exit = () => {
    store.commit('userExit')
    router.push('/')
}

</script>
<template>
    <div v-if="loginStatus">
        <el-row>
            <el-col style="display: flex;justify-content:center">
                <el-avatar :src="info.avatarUrl" :size="100"></el-avatar>
            </el-col>
        </el-row>
        <el-row style="margin-bottom: 12px;">
            <el-col style="display: flex; justify-content:center">
                <span style="font-size:28px">{{ info.username }}</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-row :span="24">
                    <Button @click="clickAvatar">
                        <template #icon-prefix>
                            <el-icon>
                                <Postcard />
                            </el-icon>
                        </template>
                        个人中心
                    </Button>
                </el-row>
                <el-row :span="24">
                    <Button>
                        <template #icon-prefix>
                            <el-icon>
                                <FolderOpened />
                            </el-icon>
                        </template>
                        收藏夹
                    </Button>
                </el-row>
            </el-col>
        </el-row>
        <el-divider style="margin: 12px 0;"></el-divider>
        <el-row>
            <Button @click="exit">
                <template #icon-prefix>
                    <el-icon>
                        <ArrowRightBold />
                    </el-icon>
                </template>
                退出登陆
            </Button>
        </el-row>
    </div>
    <div v-else class="user-card-not-login">
        <el-button class="login-btn" type="primary" @click="clickLogin">点击登陆</el-button>
        <div class="flex-block">
            <span style="text-align:center;padding: 8px 0;">首次使用?</span>
            <el-button type="primary" text @click="clickRegister">点我注册</el-button>
        </div>
        <!-- Dialog -->
        <el-dialog v-model="loginDialogVisible" width="35%" append-to-body>
            <template #default>
                <Login @to-register="clickRegister" @login-success="loginDialogVisible = false"></Login>
            </template>
        </el-dialog>
        <el-dialog v-model="registerDialogVisible" width="35%" append-to-body>
            <template #default>
                <Register @to-login="clickLogin" @register-success="registerDialogVisible = false"></Register>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.flex-block {
    display: flex;
    justify-content: center;
}

.login-btn {
    display: block;
    width: 100%;
}

.btn {
    width: 100%;
    font-size: 20px;
    display: block;
    justify-content: left;
}
</style>