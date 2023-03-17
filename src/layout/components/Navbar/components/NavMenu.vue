<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SubMenu from './SubMenu.vue';

const activeIndex = ref('/')

const menus = [
    {
        path: '/',
        meta: {
            title: "首页"
        },
    }, {
        path: '/journalism',
        meta: {
            title: "动态"
        }
    }, {
        path: '/gxa',
        meta: {
            title: "国信安"
        }
    }, {
        path: '/quiz',
        meta: {
            title: "基础赛"
        }
    }, {
        path: '/freshmanAlgorithm',
        meta: {
            title: "算法赛"
        }
    }, {
        path: '/youngStudy',
        meta: {
            title: "大学习"
        }
    }, {
        path: '/space/info',
        meta: {
            title: "我的"
        }
    },
]

</script>
<template>
    <el-menu :default-active="activeIndex" mode="horizontal" background-color="rgb(6,145,196)" router
        text-color="white">
        <div class="flex-grow"></div>
        <SubMenu v-for="item in menus" :router="item"></SubMenu>
    </el-menu>
</template>
<style scoped>
.flex-grow {
    flex-grow: 0.9;
}
</style>