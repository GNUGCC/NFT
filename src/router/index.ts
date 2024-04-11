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
    },
    {
        path: "/register",
        name: "register",
        component: () => import('@/views/RegisterView.vue')
    }
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});