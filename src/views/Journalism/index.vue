<script setup>
import { useRouter } from 'vue-router';
import { getJournalismList } from '@/api/journalism.js'
import { formatDate } from '@/utils/timeFormat.js'
import { ref, watchEffect } from 'vue';
import Pagination from '@/components/pagination/Pagination.vue';

const items = ref([])
const content = ref("")
const router = useRouter()

watchEffect(() => {
    let route = router.currentRoute.value
    if (route.query)
        content.value = route.query.content
    getJournalismList(1, 30, content.value).then(res => {
        items.value = res.data.list.map(item => {
            item.time = formatDate(item.time)
            return item
        })
    })
})

const toNewsDetail = (id) => {
    router.push('/journalism/' + id)
}

</script>
<template>
    <el-card style="position:relative; min-height: 80vh; margin: 40px 80px;">
        <template #header>
            <div id="journalism-label">动态</div>
        </template>
        <el-table :data="items">
            <el-table-column prop="id" label="序号" />
            <el-table-column prop="title" label="标题" min-width="300" @click="toNewsDetail" />
            <el-table-column prop="time" min-width="200" label="发布时间" />
            <el-table-column min-width="100">
                <template #default="scope">
                    <el-buttion link type="primary" size="small" @click.prevent="toNewsDetail(scope.row.id)">
                        查看详细
                    </el-buttion>
                </template>
            </el-table-column>
        </el-table>
        <Pagination id="journalism-padgination" :api="getJournalismList" @get-data="init"></Pagination>
    </el-card>
</template>
<style>
#journalism-padgination {
    position: absolute;
    bottom: 30px;
    width: 100%;
    /* background-color: red; */
    margin: 0;
}

#journalism-search-box {
    /* position: relative; */
    /* align-items: center; */
    /* float: right; */
    /* background-color: red; */
    width: 300px;
}

#journalism-label {
    font-size: 28px;
    font-weight: 800;
    color: #0691C4;
    border-left: 5px solid #0691C4;
    padding-left: 20px;
    /* text-align: start; */
    /* display: inline; */
    float: left;
}
</style>