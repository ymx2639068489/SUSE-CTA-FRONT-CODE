<script setup>
const props = defineProps(['height'])
const getImg = (id) => {
    return '/carousel/img-'+ id + '.jpg'
}
</script>
<template>
    <el-carousel :height="props.height" type="card">
        <el-carousel-item v-for="item in 3" :key="item">
            <el-image :src="getImg(item)"></el-image>
        </el-carousel-item>
    </el-carousel>
</template>

<style scoped>
</style>