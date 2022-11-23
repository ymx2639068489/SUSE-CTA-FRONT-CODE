<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Sidebar from './components/Sidebar.vue';
const dialogVisible = ref(false)
const store = useStore()
const name = computed(() => store.getters.getUserInfo.username)

</script>
<template>
    <div style="display:flex; ">
        <div style="width:200px;  display: inline-block; position: relative; ">
            <div style="position: absolute; top: 0px;">
                <div class="title">
                    <div style="font-size: 2em;">Hi&nbsp;</div>
                    <div style="font-size: 1.8em;">{{ name }}同学</div>
                </div>
                <Sidebar @exit-account="dialogVisible = true"></Sidebar>
            </div>
        </div>
        <div style="padding: 0; width: 90%;">
            <RouterView></RouterView>
        </div>
    </div>
    <!-- dialog -->
    <el-dialog v-model="dialogVisible" title="" width="30%">
        <span style="font-size:28px">确定退出登录</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<style >
.title {
    display: flex;
    height: 2.8em;
    line-height: 3em;
    border-left: 5px solid #2196F3;
}
</style>