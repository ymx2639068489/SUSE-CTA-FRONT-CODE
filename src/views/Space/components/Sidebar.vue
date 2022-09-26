<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const emit = defineEmits(['exitAccount'])

const activeIndex = "info"

const toPath = (event) => {
    const href = '/space/' + event.index

    router.push(href)
}

const exit = () => {
    emit("exitAccount")
}
</script>
<template>
    <div>
        <el-menu class="menu" :default-active="activeIndex">
            <el-menu-item index="info" @click="toPath">
                <el-icon>
                    <Postcard />
                </el-icon>
                个人信息
            </el-menu-item>
            <el-menu-item index="folder" @click="toPath">
                <el-icon>
                    <FolderOpened />
                </el-icon>收藏夹
            </el-menu-item>
            <el-menu-item index="recruit" @click="toPath">
                <el-icon>
                    <DocumentAdd />
                </el-icon>应聘投递
            </el-menu-item>
            <el-menu-item index="change-pwd" route="/space/change-pwd" @click="toPath">
                <el-icon>
                    <Lock />
                </el-icon>修改密码
            </el-menu-item>
            <el-menu-item @click="exit" index="exit">
                <el-icon>
                    <ArrowRightBold />
                </el-icon>退出登陆
            </el-menu-item>
        </el-menu>
    </div>

</template>
<style scoped>
</style>