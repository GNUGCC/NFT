import { createApp } from "vue";
import ElementPlus from 'element-plus';
import * as ElementPlusIcons from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

import router from "./router";
import App from "./App.vue";
//import svg from '@/components/svgIcon/_index.vue';
//import '@/components/svgIcon';
//import svgIcons from '@/components/svgIcon';

const app = createApp(App);
for (const [key, value] of Object.entries(ElementPlusIcons)) {
    app.component(key, value);
}

//app.component('svg-icon', svg);
app
    //.use(useStore())
    .use(router)
    .use(ElementPlus)
    .mount("#app");