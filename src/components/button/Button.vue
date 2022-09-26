<script setup>
</script>
<template>
    <div class="btn">
        <slot name="icon-prefix" />
        <span>
            <slot />
        </span>
        <slot name="icon-suffix" />
    </div>
</template>

<style>
.btn {
    width: 100%;
    user-select: none;
    padding: 2px;
    line-height: 1.5;
    /* border: 1px solid; */
}

.btn:hover {
    background-color: #f5f7fa;
}
</style>