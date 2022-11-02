import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import { createRouter, createWebHistory } from 'vue-router'

import "./styles/index.css"

let install = null;
let history = null
let router = null
function render(props = {}) {
    const { container, routerBase } = props;
    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL)
    router = createRouter({
        history,
        routes
    })

    install = createApp(App).use(store).use(router).mount(container ? container.querySelector("#app") : "#app")
}
if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
    render();
}

export async function bootstrap() { }

export async function mount(props) {
    render(props);
}

export async function unmount() {
    console.log('vue3 app unmount');
    history = null // 当子应用被卸载后我们将路由等全部清空
    install = null // eslint-disable-next-line no-unused-vars
    router = null
}