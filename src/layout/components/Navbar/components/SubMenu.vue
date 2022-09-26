<script setup>
const props = defineProps(['router'])
// console.log(props.router, !props.router.children)
</script>
<template>
    <el-menu-item v-if="!router.children" :index="router.path" class="item">{{router.meta.title}}</el-menu-item>
    <el-sub-menu v-else :index="router.path">
        <SubMenu v-for="item in router.children" :router="item"></SubMenu>
    </el-sub-menu>
</template>

<style>
.item {
    width: 7%;
    color: white;
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 2000;
}
</style>