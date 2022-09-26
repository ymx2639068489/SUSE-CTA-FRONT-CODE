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
                <el-avatar :src="userInfo.avatarUrl"/>
            </template>
            <UserCard style="z-index:3000"></UserCard>
        </el-popover>
    </div>
</template>