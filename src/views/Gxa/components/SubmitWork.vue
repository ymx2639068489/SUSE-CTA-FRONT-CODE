<script setup>
import { ref } from "vue";
import { UploadCodeZip, UploadOther, GetOther } from "@/api/gxaWork.js";
import { get } from "@/requests/request";
import { getTeamInfo } from "@/api/gxaWork.js";
import { ElMessage } from "element-plus";
import Tips from "./Tips.vue";

const uploadSuccess = (res) => {
  let data = res.data[0];
  console.log(data);
  otherData.value.indexHtmlImg = data.host + "/" + data.path;
};

const otherData = ref({
  indexHtmlImg: "",
  introductionToWorks: "",
  websiteUrl: "",
  githubUrl: "",
});
const status = ref(-1);

const submit = () => {
  UploadOther(otherData.value).then((res) => {
    ElMessage({
      type: "success",
      message: res.data.message,
    });
  });
};
const Static = ref(true);

const isLoader = ref(true);
const init = () => {
  GetOther().then((res) => {
    otherData.value.githubUrl = res.data.data.githubUrl;
    otherData.value.introductionToWorks = res.data.data.introductionToWorks;
    otherData.value.websiteUrl = res.data.data.websiteUrl;
    otherData.value.indexHtmlImg = res.data.data.indexHtmlImg;
    status.value = res.data.data.status;
  }).catch(() => {

  })
  getTeamInfo().then((res) => {
    Static.value = !res.data.data.group;
  });
  get("/api/gxa_application/isLeader").then((res2) => {
    isLoader.value = res2.data.data;
  });
};
init();
</script>
<template>
  <div v-if="status >= 1" id="submit-work-root">
    <div id="submit-work-main" v-if="isLoader">
      <div id="submit-work-title">
        <span>提交作品</span>
      </div>
      <el-form
        id="submit-form"
        label-width="200px"
        label-position="left"
        size="large"
      >
        <el-form-item class="submit-work-item">
          <template #label>
            <el-icon :size="36">
              <PictureFilled />
            </el-icon>
            <span class="submit-item-title"> 网站首页截图 </span>
          </template>
          <el-upload
            class="avatar-uploader"
            action="http://yibindfxy.top:444/file/upload"
            :show-file-list="false"
            name="file"
            accept=".jpg,.jpeg,.png"
            :on-success="uploadSuccess"
          >
            <img
              v-if="otherData.indexHtmlImg"
              :src="otherData.indexHtmlImg"
              class="web-site-img"
            />
            <el-icon v-else class="avatar-uploader-icon" :size="40">
              <Plus />
            </el-icon>
          </el-upload>
          <!-- <el-input
            type="textarea"
            rows="4"
            v-model="otherData.indexHtmlImg"
          >
          </el-input> -->
        </el-form-item>
        <!-- <el-form-item v-if="Static" class="submit-work-item">
          <template #label>
            <file-zip-outlined
              :style="{ fontSize: '36px', lineHeight: '36px' }"
            />
            <span class="submit-item-title">代码压缩包</span>
          </template>
          <el-upload
            style="width: 100%"
            drag
            action="#"
            :http-request="handleCodeUpload"
            :disabled="isApproved"
          >
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
        </el-form-item> -->
        <el-form-item class="submit-work-item">
          <template #label>
            <el-icon :size="36">
              <Edit />
            </el-icon>
            <span class="submit-item-title"> 网站简介 </span>
          </template>
          <el-input
            type="textarea"
            rows="4"
            v-model="otherData.introductionToWorks"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="submit-work-item">
          <template #label>
            <el-icon :size="36">
              <Link />
            </el-icon>
            <span class="submit-item-title">网站地址</span>
          </template>
          <el-input v-model="otherData.websiteUrl"> </el-input>
        </el-form-item>
        <el-form-item class="submit-work-item">
          <template #label>
            <img src="/src/assets/svg/github.svg" alt="" style="width: 36px" />
            <span class="submit-item-title">作品git地址</span>
          </template>
          <el-input v-model="otherData.githubUrl"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-if="status <= 3" type="primary" @click="submit"
            >提交基本信息</el-button
          >
          <el-button v-else type="primary" disabled
            >已初审通过, 不能继续提交了</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div v-else>请联系队长进行操作</div>
  </div>
  <Tips v-else></Tips>
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
  border-color: #63b0ff;
}

.web-site-img {
  width: 250px;
  aspect-ratio: 2 / 1;
}
</style>
