<script setup>
import { useStore } from 'vuex';
const store = useStore()
// 自动登陆
if (localStorage.getItem('token') != '') {
  store.dispatch('getUserData')
}

</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
#navbar {
  height: 15vh;
}
</style>


