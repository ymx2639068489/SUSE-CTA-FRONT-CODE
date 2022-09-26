<script setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { get } from '../../../requests/request';

const props = defineProps(['user'])
const studentID = ref('')
const invite = () => {
    get('/api/gxa_application/inviteStudent', { studentId: studentID.value }).then(res => {
        ElMessage({
            type: "success",
            message: res.data.message,
        })
    })
}
</script>
<template>
    <div class="team-card-participator-continer">
        <div>
            <div v-if="props.user">
                <img :src="props.user.avatarUrl" alt="[avatar]" class="team-card-participator-avatar">
                <div style="margin-top:20px; font-size: 14px;">{{ props.user.username }}</div>
            </div>
            <div v-else>
                <el-popover trigger="click" title="添加队友" width="200px">
                    <template #reference>
                        <el-empty description="添加队友" :image-size="50" style="padding:0;">
                            <template #image>
                                <el-icon :size="50">
                                    <Plus />
                                </el-icon>
                            </template>
                        </el-empty>
                    </template>
                    <template #default>
                        <el-form>
                            <el-form-item label="学号">
                                <el-input v-model="studentID"></el-input>
                            </el-form-item>
                        </el-form>
                        <div style="display: flex; justify-content: center;">
                            <el-button type="primary" @click="invite">发送邀请</el-button>
                        </div>
                    </template>
                </el-popover>
            </div>
        </div>
        <slot v-if="props.user" name='second-card' />
    </div>
</template>
<style>
.team-card-participator-continer {
    width: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}

.team-card-participator-avatar {
    width: 50px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
}
</style>