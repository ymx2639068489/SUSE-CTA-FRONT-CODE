import { createApp } from 'vue'
import './style.css'
import { ElementPlus, ElementPlusIconsVue } from './design/element'
import  Antd  from './design/ant'
import App from './App.vue'
import router from './routers/router'
import store from './store'

const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(Antd)


app.use(store)
app.use(router)

app.mount('#app')
