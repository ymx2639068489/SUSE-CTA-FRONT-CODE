<script setup>
import { ref } from 'vue';
import { getHomeBanner } from '@/api/banner.js';
const props = defineProps(['height'])
const carouselData = ref([])
getHomeBanner().then(res => {
    let list = res.data.data;
    carouselData.value = list;
})

</script>
<template>
    <el-carousel :height="props.height" type="card">
        <el-carousel-item v-for="item in carouselData" :key="item">
            <img :src="item.url" style="object-fit:fill;">
        </el-carousel-item>
    </el-carousel>
</template>

<style scoped>
</style>