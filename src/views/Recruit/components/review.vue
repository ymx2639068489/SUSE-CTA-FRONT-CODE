<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'
const store = useStore();
const info = computed(() => store.getters.getRecruit)
const user = computed(() => store.getters.getUserInfo)

</script>
<template>
    <el-card>
        <div calss="review-header">预览申请表</div>
        <table class="info">
            <tr>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <User />
                        </el-icon>姓名
                    </div>
                </td>
                <td class="content">
                    <div>{{ user.username }}</div>
                </td>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <Male />
                        </el-icon>性别
                    </div>
                </td>
                <td class="content">
                    <div>{{ user.gender ? '女' : '男' }}</div>
                </td>
                <td rowspan="2" class="label">
                    <div class="cell-item">
                        <el-icon>
                            <Picture />
                        </el-icon>一寸照
                    </div>
                </td>
                <td rowspan="2" style="padding: 0;">
                    <img class="inchPhoto" :src="info.inchPhoto" alt="">
                </td>
            </tr>
            <tr>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <TrophyBase />
                        </el-icon>专业
                    </div>
                </td>
                <td class="content"> {{ user.major }}</td>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <DataAnalysis />
                        </el-icon>班级
                    </div>
                </td>
                <td class="content"> {{ user.class }}</td>
            </tr>
            <tr>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <Aim />
                        </el-icon>第一志愿
                    </div>
                </td>
                <td class="content">{{ info.firstChoice }}</td>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <Star />
                        </el-icon>第二志愿
                    </div>
                </td>
                <td class="content">{{ info.secondChoice }}</td>
                <td class="label">
                    <div class="cell-item">
                        是否服从调剂
                    </div>
                </td>
                <td class="content">{{ info.isAdjust ? '服从调剂' : '拒绝调剂' }}</td>
            </tr>
            <tr>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <Document />
                        </el-icon>个人简历
                    </div>
                </td>
                <td colspan="5" class="content">
                    <div class="text-area">
                        {{ info.curriculumVitae }}
                    </div>
                </td>
            </tr>
            <tr>
                <td class="label">
                    <div class="cell-item">
                        <el-icon>
                            <GoldMedal />
                        </el-icon>竞选理由
                    </div>
                </td>
                <td colspan="5" class="content">
                    <div class="text-area">
                        {{ info.reasonsForElection }}
                    </div>
                </td>
            </tr>
        </table>
    </el-card>

</template>
<style scoped>
.inchPhoto {
    width: 100px;
    aspect-ratio: 5 / 7;
}

.info {
    width: 100%;
    margin-top: 20px;
}

.cell-item {
    display: flex;
    justify-content: center;
    width: 100px;
    line-height: 100%;

}

.text-area {
    white-space: pre-wrap;  
    word-break: break-all; 
    text-align: start;
    max-width: 800px;
}


table,
th,
td {
    border: 1px solid #EBEEF5;
}

td {
    padding: 15px;
    /* min-width: 100px; */
}

.content {
    font-size: 14px;
    font-weight: 400;
    width: 180px;
}

.label {
    background-color: #F5F7FA;
    font-weight: 700;
    color: #606266;
    font-size: 14px;
}

table {
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid #EBEEF5;
}
</style>

<style>
.review-header {
    /* background-color: red; */
    text-align: start;
    font-weight: 800;
}
</style>