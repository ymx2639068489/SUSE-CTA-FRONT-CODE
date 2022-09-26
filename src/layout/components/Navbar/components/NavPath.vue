<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const items = ref([])
const currentRoute = router.currentRoute
const init = () => {
    let routers =currentRoute.value.matched
    let list = routers.filter(item => !!item.meta && !!item.meta.title) 
    let itemlist = []
    list.forEach((item, index) => {
        itemlist.push({
            path: item.path,
            text: item.meta.title,
        })
    })
    items.value = itemlist
}
init()
watch(currentRoute, init)

</script>

<template>
    <el-breadcrumb separator=">" class="bredcrumb">
        <el-breadcrumb-item v-for="item in items" :to="item.path" :key="item.path">
            {{ item.text }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style>
.bredcrumb {
    font-size: 18px;
}
</style>