import './assets/main.css'

import { createApp } from 'vue'

import 'element-plus/dist/index.css'

import 'ant-design-vue/dist/reset.css';
import router from './router'
import App from "@/App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus'

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.use(pinia)
app.mount('#app')


