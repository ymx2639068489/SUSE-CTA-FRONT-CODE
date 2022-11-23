<script setup>
const props = defineProps(['data']);

</script>
<template>
    <div id="work-container">
        <el-card v-for="item in data" class="work-show-item">
            <a :href="item.websiteUrl" target="_blank">
                <img :src="item.showImg" alt="" class="work-index-img">
                <div>
                    <div>{{item.workname}}</div>
                    <div class="work-introduction-detail">{{item.websiteIntroduction}}</div>
                </div>
            </a>
        </el-card>
    </div>
</template>
<style>
#work-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.work-index-img {
    width: 100%;
    aspect-ratio: 2 / 1;
}

.work-show-item {
    /* float: left; */
    width: 22%;
    text-align: start;
    margin-left: calc(12% / 5);
    margin-bottom: 20px;
    /* background-color: red; */
}

.work-introduction-detail {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>