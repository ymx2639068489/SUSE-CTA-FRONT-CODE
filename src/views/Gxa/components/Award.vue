<script setup>
import labImg from '@/assets/svg/award.svg'
import svgLabel from '@/components/label/svgLabel.vue';
import tool from '@/utils/assets.js'
</script>
<template>
    <div id="gxa-award-container">
        <svgLabel :svg="labImg" title="奖项设置"></svgLabel>
        <div id="gxa-award-body">
            <div id="gxa-award">
                <div>
                    <div class="gxa-award-title">
                        <el-icon :size="28"><CaretLeft /></el-icon>动态组<el-icon :size="28"><CaretRight /></el-icon>
                    </div>
                    <img :src="tool.getAssetsFile(`award.png`)" alt="" style="height: 250px; width: 90%; ">
                </div>
                <div>
                    <div class="gxa-award-title">
                        <el-icon :size="28"><CaretLeft /></el-icon>静态组<el-icon :size="28"><CaretRight /></el-icon>
                    </div>
                    <img :src="tool.getAssetsFile(`award.png`)" alt="" style="height: 250px; width: 90%;">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#gxa-award-container {
    width: 100%;
    position: relative;
}

#gxa-award-body {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    min-height: 600px;
}

#gxa-award {
    width: 90%;
    height: 600px;

    user-select: none;
    background-color: white;

    border: 1px solid #e4e7ed;
    border-radius: 5px;

    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

.gxa-award-title {
    font-size: 28px;
    font-weight: 600;
}
</style>