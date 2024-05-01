import './assets/main.css'

import { createApp } from 'vue'

import 'element-plus/dist/index.css'

import 'ant-design-vue/dist/reset.css';
import router from './router'
import App from "/src/App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {createPinia} from "pinia";
import piniaPersist from 'pinia-plugin-persist'
import ElementPlus from 'element-plus'

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {useUserStore} from "@/stores/userStore";
import type {loginResponseData} from "@/common/data";
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(piniaPersist)

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


