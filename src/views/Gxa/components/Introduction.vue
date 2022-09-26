<script setup>
import svgLabel from '@/components/label/svgLabel.vue';
import labImg from '@/assets/svg/introduction.svg'
</script>
<template>
    <div id="gxa-introduction-container">
        <svgLabel id="gxa-title" :svg="labImg" title="赛事介绍"></svgLabel>
        <div id="gxa-introduction-body">
            <div id="gxa-introduction"></div>
        </div>
    </div>
</template>
<style scoped>
#gxa-introduction-container {
    width: 100%;
    position: relative;
}

#gxa-introduction-body {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

#gxa-introduction {
    width: 90%;
    height: 600px;
    background-color: white;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
</style>