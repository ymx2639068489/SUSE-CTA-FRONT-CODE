<script setup>
import Carousel from './components/Carousel.vue';
import HotNews from './components/HotNews.vue';
import ContactDetails from './components/ContactDetails.vue';
import page2Cpm from './components/page2.vue'
import page3Cpm from './components/page3.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const page1 = ref()
const page3 = ref()
const page4 = ref()
const container = ref()
const pageOffsetTopList = []
let last, idx = 0;
window.onresize = function () {
  // 只有首页需要控制
  if (router.currentRoute.value.path === '/') location.reload();
}
function fn(event) {
  event.preventDefault && event.preventDefault()
  let now = new Date().getTime()
  if (!last || now - last >= 500) {
    if (event.deltaY > 0 && idx < 2) {
      container.value.scrollTo({ top: pageOffsetTopList[++idx], left: 0, behavior: 'smooth' })
      last = now
    }
    if (event.deltaY < 0 && idx > 0) {
      if (idx > 0) {
        container.value.scrollTo({ top: pageOffsetTopList[--idx], left: 0, behavior: 'smooth' })
        last = now
      }
    }
  }
}

function init() {
  pageOffsetTopList.push(page1.value.offsetTop)
  pageOffsetTopList.push(page3.value.offsetTop)
  pageOffsetTopList.push(page4.value.offsetTop)
}
onMounted(init)
if ((navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
)) {
  alert('尽量使用电脑浏览哦')
}
</script>

<template>
  <div class="wrap" @mousewheel="fn">
    <div class="container" ref="container">
      <div ref="page1" class="page page1">
        <div id="carousel-continer" style="justify-content: center">
          <Carousel id="carousel" height="90%" />
        </div>
        <div id="info-continer">
          <div style="width: 90%; position: relative;">
            <div id="hot-news" class="inline-block">
              <HotNews />
            </div>
            <div id="contact-details" class="inline-block">
              <ContactDetails />
            </div>
          </div>
        </div>
      </div>
      <div ref="page3" class="page page3">
        <page2Cpm />
      </div>
      <div ref="page4" class="page page4">
        了解更多: 贡献者
        <page3Cpm />
      </div>
    </div>
  </div>
</template>

<style scoped>
#hot-news {
  width: 65%;
  height: 90%;
}

#contact-details {
  margin-left: 5%;
  width: 30%;
  height: 90%;
}

#carousel-continer {
  height: 45%;
  width: 100%;
  display: flex;
  overflow: hidden;
}

#info-continer {
  margin-top: 20px;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
}

#carousel {
  width: 90%;
  height: 100%;
  border: 1px solid #e4e7ed;
  border-radius: 5px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  background-color: white;
  /* padding-top: 10vh; */
}



.pos-relative {
  position: relative;
}

.inline-block {
  display: inline-block;
}

.page {
  width: 100%;
  height: calc(100vh - 159px);
}

.wrap {
  width: 100%;
  height: calc(100vh - 159px);
  position: relative;
  overflow: hidden;
}

.container {
  /* display: flex; */
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  right: -17px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
