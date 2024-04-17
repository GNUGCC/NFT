import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import('@/views/HomeView.vue'),
        meta: {

        },
        children: [
            {
                path: "/edit/:id",
                name: "edit",
                meta: {

                },
                component: () => import('@/views/EditView.vue')
            },
            {
                path: "/info/:id",
                name: "info",
                meta: {

                },
                component: () => import('@/views//InfoView.vue')
            }
        ]
    },
    {
        path: "/register",
        name: "register",
        meta: {

        },
        component: () => import('@/views/RegisterView.vue')
    }    
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});