import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//import * as ElementVue from '@element-plus/icons-vue';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import router from "./router";
import App from "./App.vue";

const app = createApp(App);

//for (const [key, value] of Object.entries(ElementVue)) {
//    app.component(key, value);
//}

app
    .use(router)
    .use(ElementPlus)
    .use(bootstrap)
    .mount("#app");