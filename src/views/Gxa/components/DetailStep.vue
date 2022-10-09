<script setup>
import tool from '@/utils/assets.js'
</script>
<template>
    <div>
        <div>团队报名</div>
        <el-carousel height="500px" id="award-carousel">
            <el-carousel-item v-for="item in 8" >
                <img :src="tool.getAssetsFile(`guide${item}.png`)" alt="" style="height: 100%; width: 100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<style>
#award-carousel {
    width: 90%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid; */
}
</style>