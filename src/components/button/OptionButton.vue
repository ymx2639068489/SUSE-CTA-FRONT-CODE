<template>
    <div class="opt-btn">
        <slot/>
    </div>
</template>
<style>
.opt-btn {
    /* min-height: 32px; */
    word-wrap: break-word;
    border: 1px solid;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    align-items: center;
    line-height: 1;
    padding: 8px 16px;
    border: 1px solid #dcdfe6;
}
.opt-btn:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
</style>