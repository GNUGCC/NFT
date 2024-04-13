import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: "/register",
        name: "register",
        component: () => import('@/views/RegisterView.vue')
    },
    //{
    //    path: "/edit",
    //    name: "edit",
    //    component: () => import('@/views/EditView.vue')
    //}
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});