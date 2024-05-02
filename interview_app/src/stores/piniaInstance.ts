//piniaInstance.ts
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件

//所有需要使用到pinia的地方都引用这一个实例，如果在main中初始化则在vue根组件外无法使用。
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia