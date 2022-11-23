<script setup>
import Navbar from './components/Navbar/index.vue'
import Footer from './components/Footer/index.vue';
</script>

<template>
    <div class="continer">
        <Navbar class="header"></Navbar>
        <div class="main">
            <RouterView></RouterView>
        </div>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 100px;
    background-color: white;
    z-index: 2000;
    position: sticky;
    top: 0;
    width: 100%;
}

.main {
    /* min-height: 90vh; */
    min-height: calc(100vh - 159px);
}

.footer {
    margin: auto;
    height: 59px;
}
</style>