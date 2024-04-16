import { createApp } from "vue";
import ElementPlus from 'element-plus';
import * as bootstrap from 'bootstrap';
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app
    .use(router)
    .use(ElementPlus)
    .use(bootstrap)
    .mount("#app");