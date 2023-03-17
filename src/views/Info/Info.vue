<script setup>
import Avatar from '@/components/avatar/Avatar.vue';
import Form from './components/form.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { put } from '../../requests/request';
import { ElMessage } from 'element-plus';
const store = useStore()
const info = computed(() => store.getters.getUserInfo)
const handleAvatarSuccess = (response) => {
    let data = response.data[0];
    info.value.avatarUrl = data.host + "/" + data.path
    put('/api/users/updateUserInfo', {
        avatarUrl: info.value.avatarUrl
    }).then(res => {
        ElMessage({
            type: "success",
            message: "更新成功"
        })
    })
}
</script>
<template>
    <div id="info-container">
        <el-row>
            <el-col :span="8" style="display:flex; justify-content: center;">
                <el-upload id="avatar-box" action="http://yibindfxy.top:444/file/upload"
                    :show-file-list="false" :on-success="handleAvatarSuccess" name="file">
                    <div id="avatar-box">
                        <Avatar :avatar="info.avatarUrl">
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
            <el-col id="profil" :span="8">
                <Form></Form>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
#avatar-box {
    display: flex;
    width: 200px;
    height: 200px;
    justify-content: center;
    /* background-color: red; */
    margin-top: 10vh;
}

#profil {
    margin-top: 40px;
}

#info-container {
    /* background-color: red; */
}
</style>