<script setup>
import tool from '@/utils/assets.js'
</script>
<template>
        <img id="gxa-group-info" :src="tool.getAssetsFile('gxa-group.png')" alt="国信安群二维码">
</template>
<style scoped>
#gxa-group-info {
    width: 90%;
    height: 250px;
    background-color: #0691C4;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: start;
    color: white;
}

#group-label-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 0 50px;
}

#group-label-one {
    font-size: 42px;
    /* background-color: blue; */
    line-height: 42px;
    margin-top: 30px;
    font-weight: 800;
}

#group-label-two {
    font-size: 32px;
    /* background-color: blue; */
    line-height: 32px;
    margin-top: 30px;
    font-weight: 800;
}
</style>