import { createApp } from "vue";
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'

const app = createApp(App);
app.mount("#app");

const config = {
    beforeLoad: [
        app => {
            console.log("%c before load",
                'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff',
                app);
        }
    ], // 挂载前回调
    beforeMount: [
        app => {
            console.log("%c before mount",
                'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff',
                app);
        }
    ], // 挂载后回调
    afterUnmount: [
        app => {
            console.log("%c after unload",
                'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff',
                app);
        }
    ] // 卸载后回调
}
registerMicroApps(microApps, config)
setDefaultMountApp(microApps[0].activeRule) // 默认打开第一个子项目
start()