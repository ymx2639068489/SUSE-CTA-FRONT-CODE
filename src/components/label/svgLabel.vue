<script setup>
const props = defineProps(['svg', 'title'])
const url = props.svg
</script>
<template>
    <div id="label-container">
        <div id="label-header">
            <img :src="url" alt="" class="label-row-icon">
            <div class="label-title">{{props.title}}</div>
        </div>
    </div>
</template>
<style scoped>
#label-container {
    width: 100%;
    position: relative;
    /* background-color: green; */
}

#label-header {
    display: flex;
    justify-content: start;
    /* background-color: red; */
    position: relative;
    left: 0;
}

.label-row-icon {
    width: 100px;
    aspect-ratio: 1 / 1;
    margin-right: 10px;
}

.label-title {
    margin-top: calc(100px - 37px);
    padding-left: 10px;
    height: 38px;
    font-size: 38px;
    border-left: 10px solid #0691C4;
    line-height: 100%;
}
</style>