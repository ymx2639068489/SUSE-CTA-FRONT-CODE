<script setup>
import { get } from '@/requests/request';
import { ref } from 'vue';
import NavTop from './components/NavTop.vue';
import NavMenu from './components/NavMenu.vue';
import NavPath from './components/NavPath.vue';

const props = defineProps({
    iconSrc: String
})

const unreadCount = ref('0')

const getUnreadMessage = () => {
    get('/api/message/notRead', {}, {
        loading: false
    }).then(res => {
        let data = res.data
        unreadCount.value = data.data
    })
}
// 生产环境开启
// setInterval(getUnreadMessage, 3000)


</script>
<template>
    <div>
        <NavTop id="nav-top"></NavTop>
        <NavMenu id="nav-menu"></NavMenu>
        <NavPath id="nav-path"></NavPath>
    </div>
</template>
<style scoped>
#nav-top {
    height: 45%;
}

#nav-menu {
    height: 35%;
}

#nav-path {
    height: 20%;
}
</style>