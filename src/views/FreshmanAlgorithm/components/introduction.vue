<template>
    <el-card>
        <template #header>
            <div id="algo-introduction-label">算法赛介绍</div>
        </template>
        <div id="algo-intruduction-text">
            <h2>比赛背景及其意义</h2>
            随着期末的临近，为计算机科学与工程学院培养出更多算法方面的人才，让大家了解、认识算法和算法比赛，为让新生成为下一年算法主力军做准备。故进行本次线下算法比赛（宜宾校区和李白河校区）。
            <h2>比赛人员</h2>
            四川轻化工大学在校大一,大二学生。
            <h2>比赛奖励</h2>
            <ul>一等奖6名：4个学时 + 奖品 （大一3名，大二3名）</ul>
            <ul>二等奖10名：3个学士 + 奖品 （大一5名，大二5名）</ul>
            <ul>三等奖20名：2个学时 + 10元奖品 （大一10名，大二10名）</ul>
            <ul>参与奖100名：1个学时（做出1及以上道题，且在线时间超过2小时）</ul>
            <h2>比赛形式</h2>
            <p>比赛共7道题目，设时3个小时，使用我校在线评测网站<a href="http://acm.suse.edu.cn">acm.suse.edu.cn</a>。</p>
            <p>比赛采用传统ACM赛制，即每道题提交之后都有反馈，可以看到“通过”、“答案错误”等题目的提交结果，无法看到错误的测试样例，每道题都有多个测试点，每道题必须通过了所有的测试点才算通过。每道题不限提交次数，若提交未通过，会有罚时，仅以最后一次提交为准。最终排名以参赛人员的罚时和通过题目数共同决定
            </p>
        </div>
    </el-card>
</template>
<style>
#algo-intruduction-text {
    margin-top: -20px;
    text-align: start;
    color: #1e5164;
}

#algo-introduction-label {
    font-size: 28px;
    font-weight: 800;
    text-align: start;
    line-height: 1;
    padding-left: 20px;
    border-left: 5px solid #0691C4;
    color: #0691C4;
}
</style>