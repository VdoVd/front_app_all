import './assets/main.css'

import { createApp } from 'vue'

import 'element-plus/dist/index.css'

import 'ant-design-vue/dist/reset.css';
import router from './router'
import App from "/src/App.vue";


import {createPinia} from "pinia";
import piniaPersist from 'pinia-plugin-persist'

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {useUserStore} from "@/stores/userStore";
import type {loginResponseData} from "@/common/data";
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
pinia.use(piniaPersist)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')


