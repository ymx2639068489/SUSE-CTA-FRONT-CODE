<script setup>
import { useRouter } from 'vue-router';
import { getJournalismList } from '@/api/journalism.js'
import {formatDate} from '@/utils/timeFormat.js'
import { ref } from 'vue';
const router = useRouter()
const clickMoreBtn = () => {
    router.push("/journalism")
}
const items = ref([])
getJournalismList(1, 5).then(res => {
    items.value = res.data.list.map(item => {
        item.time = formatDate(item.time)
        return item
    })
})
const toNewsDetail = (id) => {
    router.push('/journalism/' + id)
}
</script>
<template>
    <el-card class="box-card">
        <template #header>
            <div style="position:relative; display: flex;">
                <div id="hot-news-header-label">动态</div>
                <div class="btn-more"  @click="clickMoreBtn">查看更多</div>
            </div>
        </template>
        <el-table :data="items">
            <el-table-column prop="id" label="序号"  />
            <el-table-column prop="title" label="标题" min-width="300"  @click="toNewsDetail" />
            <el-table-column prop="time" min-width="200" label="发布时间" />
            <el-table-column min-width="100">
                <template #default="scope">
                    <el-button text type="primary" size="small" @click.prevent="toNewsDetail(scope.row.id)">
                        查看详细
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>
<style>
.box-card {
    width: 100%;
    height: 100%;
}

.btn-more {
    /* display: inline; */
    position: absolute;
    right: 20px;
    background: linear-gradient(120deg, #9abbf7 0%, #ffbbf4 100%);
    color: white;
    font-weight: 800;
    line-height: 1.5;
    border-radius: 20px;
    width: 100px;
    font-size: 18px;
    cursor: pointer;
    user-select: none;
}

#label {
    font-size: 28px;
    line-height: 60px;
    display: inline;
    position: absolute;
    left: 0;
}

.news-item {
    width: 100%;
    text-align: left;
    font-size: 24px;
    height: 40px;
    padding-left: 10px;
    margin-top: 10px;
    cursor: pointer;
}

.news-item:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}

#hot-news-header-label {
    font-size: 28px;
    font-weight: 800;
    text-align: start;
    line-height: 1;
    padding-left: 20px;
    border-left: 5px solid #0691C4;
    color: #0691C4;
    text-align: start;
    
}
</style>