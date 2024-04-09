import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/LoginView.vue')
    }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});