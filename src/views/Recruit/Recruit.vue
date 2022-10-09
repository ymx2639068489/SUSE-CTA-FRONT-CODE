<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { get } from '@/requests/request.js';
import Form from './components/form.vue';
import Review from './components/review.vue';
const store = useStore();
onMounted(() => {
    get('/api/recruitment/getUserApplication').then(res => {
        let data = res.data.data;
        store.commit('setRecurit', data)
    })
})
</script>
<template>
    <div id="recruit-continer">
        <Review class="recruit-review"></Review>
        <Form class="recruit-form"></Form>
    </div>
</template>
<style scoped>
#recruit-continer {
    display: flex;
    margin-top: 30px;
    position: relative;
}

.recruit-review {
    width: 60%;
    margin-left: 5%;
}

.recruit-form {
    position: absolute;
    right: 40px;
    width: 30%;
}
</style>