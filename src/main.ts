import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import router from "./router";
import App from "./App.vue";

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(bootstrap)
    .mount("#app");