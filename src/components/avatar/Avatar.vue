<script setup>
import { ref } from 'vue'
const props = defineProps(['avatar', 'size'])
const showBtn = ref(false)
</script>
<template>
    <div id="img-contianer">
        <el-avatar class="avatar" :src="props.avatar" @mouseover="showBtn = true" />
        <div class="avatar" id="mask" v-if="showBtn"  @mouseleave="showBtn = false">
            <slot name="mask-text">
                <div class="label">
                    上传头像
                    <el-icon>
                        <Upload />
                    </el-icon>
                </div>
            </slot>
        </div>
    </div>
</template>
<style scoped>
#img-contianer {
    width: 100%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
    overflow: hidden;
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

#mask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(21, 8, 8, 0.7);
    position: absolute;
    top: 0;
    color: white;
    font-size: 20px;
}
</style>