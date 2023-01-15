import { createApp } from 'vue'
import './style.css'
import { ElementPlus, ElementPlusIconsVue } from './design/element'
import  Antd  from './design/ant'
import App from './App.vue'
import router from './routers/router'
import store from './store'
// import { createMonitor } from "./index.esm.js";
// createMonitor({
//   url: "https://cn-cd-dx-7.natfrp.cloud:57545",
//   appId: "b2FdF9cb-1EE7-Dc6e-de9C-1cAcf37dcdd5",
//   userId: "",
// });
const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(Antd)


app.use(store)
app.use(router)

app.mount('#app')
