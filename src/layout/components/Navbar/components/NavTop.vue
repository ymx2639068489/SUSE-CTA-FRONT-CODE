<script setup>
import NavBarIcon from './NavBarIcon.vue';
import NavAvatar from './NavAvatar.vue';
import Message from './Message.vue';
import { useRouter } from 'vue-router';
import NavSearch from './NavSearch.vue';
const router = useRouter()
const toHome = () => {
    router.push('/')
}
</script>
<template>
    <div class="nav-top">
        <NavBarIcon id="nav-top-icon" @click="toHome"></NavBarIcon>
        <div id="nav-top-operator-group">
            <NavSearch id="nav-top-search"></NavSearch>
            <NavAvatar id="nav-top-avatar"></NavAvatar>
            <Message id="nav-top-message"></Message>
        </div>
    </div>
</template>
<style scoped>
.nav-top {
    display: flex;
}

#nav-top-operator-group {
    /* background-color: red; */
    z-index: 3000;
    display: flex;
    position: relative;
    left: 50%;
    /* float: right; */
}

#nav-top-icon {
    width: 400px;
    height: 60px;

    position: absolute;
    left: 40px;
}

@keyframes flash {
    0% {
        border-color: #20baf2;
    }

    50% {
        border-color: white;
    }
}

#nav-top-avatar {
    border: 2px solid white;
    border-radius: 50%;
    animation: flash 2s;
    animation-iteration-count: infinite;
}

#nav-top-search {
    width: 400px;
    margin: auto 60px;
}

#nav-top-message {
    margin-top: 5px;
    margin-left: 20px;
}
</style>