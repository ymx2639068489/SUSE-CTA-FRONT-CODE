<script setup>
const wxList = [
    '/wx-contact.png',
]
const qqList = [
    '/qq-contact.png',
]
</script>
<template>
    <el-card class="box-card">
        <div class="v-block">
            <el-button type="primary"  class="contact-detail-btn">加入我们</el-button>
            <el-button type="primary"  class="contact-detail-btn">联系我们</el-button>
            <div class="qr-code">
                <el-image class="image" src="/wx-contact.png" :preview-src-list="wxList" />
                <el-image class="image" src="/qq-contact.png" :preview-src-list="qqList" />
            </div>

        </div>
    </el-card>
</template>
<style scoped>
.v-block {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    /* background-color: red; */
}

.qr-code {
    /* background-color: red; */
    margin-top: 10px auto;
    width: 75%;
    display: flex;
    justify-content: space-between;
}

.contact-detail-btn {
    width: 75%;
    height: 60px;
    margin: 8px auto;
    background-color: #078FC6;
    /* background: linear-gradient(120deg, #9abbf7 0%, #ffbbf4 100%); */
    font-size: 20px;
    display: block;
    /* margin-top: 20px; */
}

.box-card {
    /* background-color: green; */
    width: 100%;
    height: 100%;
    z-index: 2000;
}

.image {
    height: 45%;
    width: 45%;
    margin: 0;
}
</style>