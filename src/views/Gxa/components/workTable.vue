<script setup>
const props = defineProps(['data']);

</script>
<template>
    <div>
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
.work-index-img {
    width: 100%;
    aspect-ratio: 2 / 1;
}

.work-show-item {
    float: left;
    width: 22%;
    text-align: start;
    margin-left: calc(12% / 5);
    /* background-color: red; */
}

.work-introduction-detail {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>