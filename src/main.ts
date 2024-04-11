import { createApp } from "vue";
import ElementPlus from 'element-plus';
//import * as ElementPlusIcons from '@element-plus/icons-vue';
import * as bootstrap from 'bootstrap';
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css'

import store from '@/store';
import router from "./router";
import App from "./App.vue";
//import svg from '@/components/svgIcon/_index.vue';
//import '@/components/svgIcon';
//import svgIcons from '@/components/svgIcon';

const app = createApp(App);
//for (const [key, value] of Object.entries(ElementPlusIcons)) {
//    app.component(key, value);
//}

//app.component('svg-icon', svg);
app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(bootstrap)
    .mount("#app");