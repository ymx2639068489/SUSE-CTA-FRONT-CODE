<script setup>
import { getJournalismDetail } from '@/api/journalism.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate } from '@/utils/timeFormat.js'

const router = useRouter()
const id = router.currentRoute.value.params.id
const data = ref({
    author: "",
    id: 0,
    time: "",
    title: "",
})
getJournalismDetail(id).then(res => {
    data.value = res.data.data
    data.value.time = formatDate(data.value.time)
})
const goBack = () => {
    router.back()
}
</script>
<template>
    <div style="padding-top: 20px;">
        <el-card style="min-height: 80vh; max-width: 90vw; margin: auto;">
            <template #header>
                <el-page-header @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-3"> {{data.title}} </span>
                    </template>
                </el-page-header>
            </template>
            <div id="news-title">{{data.title}}</div>
            <div id="news-info">
                <div class="news-info-item">作者:{{data.author}}</div>
                <div class="news-info-item">发布时间:{{data.time}}</div>
            </div>
            <div id="news-content" v-html="data.content"></div>
        </el-card>
    </div>

</template>

<style scoped>
#news-title {
    font-size: 28px;
    font-weight: 800;
}

#news-info {
    display: flex;
    justify-content: center;
    margin: 10px 0;
}

.news-info-item {
    margin-left: 20px;
    font-size: 18px;
}

#news-content {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 20px;
}
</style>