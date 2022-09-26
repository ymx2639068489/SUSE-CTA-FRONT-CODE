<script setup>
import Carousel from './components/Carousel.vue';
import HotNews from './components/HotNews.vue';
import ContactDetails from './components/ContactDetails.vue';
</script>

<template>
    <div id="root">
        <div id="carousel-continer" style="justify-content: center">
            <Carousel id="carousel" height="35vh"></Carousel>
        </div>
        <div id="info-continer">
            <div style="width: 90%; position: relative;">
                <div id="hot-news" class="inline-block">
                    <HotNews></HotNews>
                </div>
                <!-- <el-divider direction="vertical" style="height:350px">
                </el-divider> -->
                <div id="contact-details" class="inline-block">
                    <ContactDetails></ContactDetails>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
#hot-news {
    width: 65%;
    height: 350px;
    position: absolute;
    left: 0;

}

#contact-details {
    width: 30%;
    height: 350px;
    position: absolute;
    right: 0;
}

#root {
    width: 100%;
    height: 100%;
}

#carousel-continer {
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
}

#carousel {
    width: 90%;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
    background-color: white;
}

#info-continer {
    margin-top: 20px;
    height: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;

}

.pos-relative {
    position: relative;
}

.inline-block {
    display: inline-block;
}
</style>
