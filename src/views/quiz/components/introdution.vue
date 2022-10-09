<template>
    <el-card>
        <template #header>
            <div id="quiz-introduction-header-text">计算机知识竞赛</div>
        </template>
        <div id="quiz-introdution-detail">
            <h2>比赛背景及其意义</h2>
            为了推动我校大学生的计算机软硬件以及计算机基础知识的了解，普及计算机软硬件知识，提高同学们的计算机应用水平和综合素质，故进行本次线上计算机基础知识竞赛
            <h2>比赛人员</h2>
            四川轻化工大学在校大学生。
            <h2>比赛奖励</h2>
            <ul>一等奖 40名：1.00个学时（总分达到50分及其以上）</ul>
            <ul>二等奖 80名：0.75个学时（总分达到50分及其以上）；</ul>
            <ul>三等奖 120名：0.50个学时（总分达到50分及其以上）；</ul>
            <ul>参与奖 560名：0.25个学时（总分达到50分及其以上）。</ul>
            <h2>比赛形式</h2>
            <p>比赛共80道题，单选40、多选20、判断20;</p>
            <p> 在线答题。比赛采用按分数排名，从高到低，相同分数比较对应时间。在答完所有题目后点击提交可查看对应分数，在对应页面可查看当前排行榜，每人仅限一次答题机会，提交一次后无法再次答题。</p>

        </div>
    </el-card>
</template>

<style>
#quiz-introduction-header-text {
    font-size: 28px;
    font-weight: 800;
    text-align: start;
    line-height: 1;
    padding-left: 20px;
    border-left: 5px solid #0691C4;
    color: #0691C4;
}

#quiz-introdution-detail {
    margin-top: -20px;
    text-align: start;
    color: #1e5164;
}
</style>