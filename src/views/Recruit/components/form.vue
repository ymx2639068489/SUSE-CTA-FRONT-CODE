<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { patch, post } from '@/requests/request.js'

import { ElMessage } from 'element-plus'

const store = useStore();

const data = computed(() => store.getters.getRecruit);
const formData = ref(data.value)

const changeValue = () => {
    store.commit('setRecurit', formData.value)
}
const handleAvatarSuccess = (response, uploadFile, uploadFiles) => {
    let data = response.data[0];
    formData.value.inchPhoto = data.Host + "/" + data.RelativePath
}
const beforeAvatarUpload = () => {
    console.log('avatar upload before')
}
const options = [{
    label: "秘书处",
    value: "秘书处"
}, {
    label: "组织宣传部",
    value: "组织宣传部"
}, {
    label: "技术服务部",
    value: "技术服务部"
}, {
    label: "项目实践部",
    value: "项目实践部"
}, {
    label: "算法竞赛部",
    value: "算法竞赛部"
},]

const cancelApplication = () => {
    patch('/api/recruitment/cancelApplocation').then(res => {
        formData.value.isDeliver = false;
        store.commit('setRecurit', formData.value)
        ElMessage({
            type: "success",
            message: "取消成功"
        })
    })
}

const deliverApplication = () => {
    patch('/api/recruitment/sureApplocation').then(res => {
        formData.value.isDeliver = true;
        store.commit('setRecurit', formData.value)
        ElMessage({
            type: "success",
            message: "投递成功"
        })
    })
}

const saveApplication = () => {
    const temp = formData.value
    delete temp.isDeliver
    post('/api/recruitment/updateApplicationForm', temp).then(res => {
        ElMessage({
            type: "success",
            message: "保存成功"
        })
    })
}
</script>
<template>
    <el-card>

        <div class="header">志愿填报</div>
        <el-form id="form" label-width="100px" label-position="left">
            <el-form-item label="一寸照">
                <el-upload class="avatar-uploader" action="https://yibindfxy.top:444/application/upload/file"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                    name="file[]">
                    <img v-if="data.inchPhoto" :src="formData.inchPhoto" id="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="第一志愿">
                <el-select v-model="formData.firstChoice" size="large" @input="changeValue">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="第二志愿">
                <el-select v-model="formData.secondChoice" size="large" @input="changeValue">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="是否接受调剂">
                <el-switch v-model="formData.isAdjust" active-icon="Check" inactive-icon="Close" />
            </el-form-item>
            <el-form-item label="个人简历">
                <el-input type="textarea" v-model="formData.curriculumVitae" size="large" rows="6" @input="changeValue">
                </el-input>
            </el-form-item>
            <el-form-item label="竞选理由">
                <el-input type="textarea" v-model="formData.reasonsForElection" size="large" rows="6"
                    @input="changeValue"></el-input>
            </el-form-item>
        </el-form>
        <el-button v-if="formData.isDeliver" class="btn" type="info" size="large" @click="cancelApplication">
            取消投递
        </el-button>
        <div v-else id="btn-group">
            <el-button class="btn" type="primary" size="large" @click="deliverApplication">
                投递志愿
            </el-button>
            <el-button class="btn" type="success" size="large" @click="saveApplication">
                保存志愿
            </el-button>

        </div>
    </el-card>
</template>
<style scoped>
.avatar-uploader {
    width: 70px;
    aspect-ratio: 5 / 7;
    /* background-color: red; */
    cursor: pointer;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

#mask-text {
    font-size: 20px;
}

#avatar {
    width: 70px;
    aspect-ratio: 5/ 7;
    font-size: 18px;
}

.root {
    width: 50%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
}

.card-header {
    display: flex;
    justify-content: start;
    /* line-height: 100%; */
    text-align: center;
}

#title {
    font-size: 28px;
}

#btn-group {
    display: flex;
    justify-content: center;
}

.btn {
    width: 50%;
}
</style>