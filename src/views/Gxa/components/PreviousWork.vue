<script setup>
import svgLabel from '@/components/label/svgLabel.vue';
import labImg from '@/assets/svg/previousWork.svg'
</script>
<template>
    <div id="gxa-work-container">
        <svgLabel :svg="labImg" title="往届作品"></svgLabel>
        <div id="gxa-work-body">
            <div id="gxa-work"></div>
        </div>
    </div>
</template>
<style scoped>
#gxa-work-container {
    width: 100%;
    position: relative;
    /* background-color: green; */
}

#gxa-work-body {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

#gxa-work {
    width: 90%;
    height: 600px;

    border: 1px solid #e4e7ed;
    border-radius: 5px;
    
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

    background-color: white;
}
</style>