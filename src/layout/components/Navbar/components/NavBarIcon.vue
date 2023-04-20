<script setup>
</script>
<template>
    <div class="icon-block">
        <div class="img-block">
            <img src="@/assets/icon.jpg" alt="图片" class="icon-img" />
        </div>
        <div class="description-first">
            <span class="description-first-text">高校学科竞赛协同平台</span>
        </div>
        <div class="description-second">
            <span class="description-second-text">Computer Technology Association</span>
        </div>
    </div>
</template>
<style scoped>
.icon-block {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50% 50%;
    column-gap: 0px;
    justify-content: center;
    background-color: white;
    border-radius: 53px;
    z-index: 2000;
}

.img-block {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
}

.icon-img {
    height: 100%;
    border-radius: 53px;
}

.description-first {
    grid-column: 2 / span 3;
    grid-row: 1 / span 1;
    position: relative;
}


.description-second {
    grid-column: 2 / span 3;
    grid-row: 2 / span 1;
    position: relative;
}

.description-first-text {
    display: block;
    color: #078FC6;

    font-size: 28px;
    font-weight: 800;
    line-height: 28px;

    position: absolute;
    bottom: 0;
    left: 0;
}

.description-second-text {
    display: block;

    color: #078FC6;
    font-size: 16px;
    line-height: 16px;
    position: absolute;
    top: 15%;
    left: 0;
}
</style>