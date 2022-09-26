<script setup>
import { ref } from 'vue';
import { UploadCodeZip, UploadOther, GetOther } from '@/api/gxaWork.js'
import {
    FileZipOutlined,
} from '@ant-design/icons-vue'
import { ElMessage } from 'element-plus';

const uploadSuccess = (res) => {
    let data = res.data[0];
    otherData.value.showImg = data.Host + "/" + data.RelativePath
}

const otherData = ref({
    showImg: "",
    websiteIntroduction: "",
    websiteUrl: "",
    githubUrl: "",
})

const handleCodeUpload = (options) => {
    const formData = new FormData();
    formData.append('file', options.file)
    UploadCodeZip(formData).then(res => {
        ElMessage({
            type: "success",
            message: res.data.message
        })
    })
}

const submit = () => {
    UploadOther(otherData.value).then(res => {
        ElMessage({
            type: "success",
            message: res.data.message
        })
    })
    init()
}

const init = () => {
    GetOther().then(res => {
        console.log(res)
        otherData.value.githubUrl = res.githubUrl
    }).catch(err => {

    })
}
init()


</script>
<template>
    <div id="submit-work-root">
        <div id="submit-work-main">
            <div id="submit-work-title">
                <span>提交作品</span>
            </div>
            <el-form id="submit-form" label-width="200px" label-position="left" size="large">
                <el-form-item class="submit-work-item">
                    <template #label>
                        <el-icon :size="36">
                            <PictureFilled />
                        </el-icon>
                        <span class="submit-item-title">
                            网站首页截图
                        </span>
                    </template>
                    <el-upload class="avatar-uploader" action="https://yibindfxy.top:444/application/upload/file"
                        :show-file-list="false" :on-success="uploadSuccess" name="file[]">
                        <img v-if="otherData.showImg" :src="otherData.showImg" class="web-site-img" />
                        <el-icon v-else class="avatar-uploader-icon" :size="40">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
                <el-form-item class="submit-work-item">
                    <template #label>
                        <file-zip-outlined :style="{fontSize: '36px', lineHeight: '36px'}" />
                        <span class="submit-item-title">代码压缩包</span>

                    </template>
                    <el-upload style="width: 100%" drag action="#" :http-request="handleCodeUpload">
                        <el-icon class="el-icon--upload">
                            <upload-filled />
                        </el-icon>
                        <div class="el-upload__text">
                            Drop file here or <em>click to upload</em>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">
                                zip files with a size less than 300MB
                            </div>
                        </template>
                    </el-upload>
                </el-form-item>
                <el-form-item class="submit-work-item">
                    <template #label>
                        <el-icon :size="36">
                            <Edit />
                        </el-icon>
                        <span class="submit-item-title">
                            网站简介
                        </span>

                    </template>
                    <el-input type="textarea" rows="4" v-model="otherData.websiteIntroduction">

                    </el-input>
                </el-form-item>
                <el-form-item class="submit-work-item">
                    <template #label>
                        <el-icon :size="36">
                            <Link />
                        </el-icon>
                        <span class="submit-item-title">网站地址</span>

                    </template>
                    <el-input v-model="otherData.websiteUrl">

                    </el-input>
                </el-form-item>
                <el-form-item class="submit-work-item">
                    <template #label>
                        <img src="/src/assets/svg/github.svg" alt="" style="width: 36px;">
                        <span class="submit-item-title">作品github地址</span>

                    </template>
                    <el-input v-model="otherData.githubUrl">

                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submit">提交基本信息</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped>
#submit-work-root {
    display: flex;
    justify-content: center;
}

#submit-work-main {
    width: 60%;
}

#submit-work-title {
    font-size: 28px;
    font-weight: 800;
    line-height: 1.5;
    margin: 20px;
    /* color: #0691C4 */
}

.avatar-uploader-icon {
    width: 150px;
    height: 150px;
    border: 1px dashed #8c939d;
    border-radius: 5px;

}

.submit-item-title {
    font-size: 18px;
}

.avatar-uploader-icon:hover {
    border-color: #63B0FF;
}

.web-site-img {
    width: 150px;
    aspect-ratio: 1 / 1;
}
</style>