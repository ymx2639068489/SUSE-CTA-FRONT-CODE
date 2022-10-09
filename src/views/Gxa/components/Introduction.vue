<script setup>
import svgLabel from '@/components/label/svgLabel.vue';
import labImg from '@/assets/svg/introduction.svg'
</script>
<template>
    <div id="gxa-introduction-container">
        <svgLabel id="gxa-title" :svg="labImg" title="赛事介绍"></svgLabel>
        <div id="gxa-introduction-body">
            <div id="gxa-introduction">
                <h2>比赛背景</h2>
                <p>
                    “互联网+”的大背景下，为了加快多学科结合的人才培养模式改革和创新的步伐，培养满足社会需要的高素质技能型、应用型人才，提升学生的就业竞争力。经研究决定，举办由成都国信安信息产业基地有限公司冠名的“国信安杯”大学生网页设计竞赛
                </p>
                <h2>一、竞赛目的</h2>
                <ol>
                    <li>激发学生对网页设计学习的兴趣和热情；</li>
                    <li>提高学生对所学网页知识的综合运用能力；</li>
                    <li>提升学生的团队协作能力和团队协作意识；</li>
                    <li>培养学生的创新精神和实践能力。</li>
                </ol>
                <h2>二、参赛对象</h2>
                <p> 四川轻化工大学在校学生。</p>
                <h2>三、参赛形式</h2>
                <ol>
                    <li>学生以团队形式参赛，团队人数最多3人；</li>
                    <li>团队名称字数不超过6个汉字且合法。</li>
                </ol>
                <h2>四、参赛作品内容要求</h2>
                <ol>
                    <li>各类学院、系、部网站：如**学院网站；</li>
                    <li>各类政府、部门、企业门户网站：如**市政府网站；</li>
                    <li>各类网络信息管理平台：学校微课平台；</li>
                    <li>具有特色的电子商务网站；</li>
                    <li>SNS社交网站；</li>
                    <li>移动Web网站；</li>
                    <li>微信、支付宝等小程序；</li>
                    <li>其它自定义主题。</li>
                </ol>
                <a href="https://jsj.suse.edu.cn/" target="_blank">了解更多</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
#gxa-introduction-container {
    width: 100%;
    position: relative;
}

#gxa-introduction-body {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

#gxa-introduction {
    text-align: start;
    width: calc(90% - 100px);
    padding: 50px;
    /* height: 600px; */
    background-color: white;
    border: 1px solid #e4e7ed;
    border-radius: 5px;

    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
</style>