<script setup>
import tool from '@/utils/assets.js'
</script>
<template>
    <div id="gxa-group-info">
        <img src="/question.png" alt="img" style="margin: 0 100px">
        <div id="group-label-container" style="margin: 0 100px">
            <span id="group-label-one">有问题?</span>
            <span id="group-label-two">加群了解一下</span>
            <span></span>
        </div>
        <svg t="1663158017760" style="margin: auto 50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="5572" width="100px" height="100px">
            <path
                d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m259.856315 537.511008L695.91657 617.010429c-1.186559 1.186559-3.559676 3.559676-5.932792 4.746234L457.418308 853.135574a39.393743 39.393743 0 0 1-55.76825 0l-77.126304-77.126304a39.393743 39.393743 0 0 1 0-55.76825l208.834299-208.834299L325.710313 302.572422a39.393743 39.393743 0 0 1 0-55.768251l77.126303-77.126303c15.425261-15.425261 40.34299-15.425261 55.768251 0L693.543453 404.616454c1.186559 1.186559 2.373117 1.186559 2.373117 2.373117l77.126304 77.126304c3.559676 3.559676 7.119351 8.30591 8.305909 13.052144 4.746234 14.238702 2.373117 30.850521-9.492468 42.716106z"
                p-id="5573" fill="#ffffff"></path>
        </svg>
        <img :src="tool.getAssetsFile('gxa_group.png')" alt="国信安群二维码" style="margin: auto 100px; height: 150px; aspect-ratio: 1 / 1;">
    </div>
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