<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import UserCard from './UserCard.vue';
const store = useStore()
const userInfo = computed(() => store.getters.getUserInfo)
</script>
<template>
    <div>
        <el-popover trigger="hover" width="300px" effect="light" :show-arrow="false" :teleported="false">
            <template #reference>
                <img v-if="userInfo.avatarUrl" id="nav-avatar-img" :src="userInfo.avatarUrl" />
                <div v-else id="unLogin-avatal">
                    <span style="margin:auto">登陆</span>
                </div>
            </template>
            <UserCard style="z-index:3000"></UserCard>
        </el-popover>
    </div>
</template>
<style>
#unLogin-avatal {
    background-color: #0691C4;
    color: white;
    width: 36px;
    height: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
}

#nav-avatar-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}
</style>