import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import('@/views/HomeView.vue'),
        meta: {
            title: '',
            icon: ''
        },
        children: [
            {
                path: '/member',
                name: 'member',
                children: [
                    {
                        path: "/member/edit/:id",
                        name: "edit",
                        meta: {

                        },
                        component: () => import('@/views/EditView.vue')
                    },
                    {
                        path: "/member/info/:id",
                        name: "info",
                        meta: {

                        },
                        component: () => import('@/views//InfoView.vue')
                    }
                ]
            },
            {
                path: '/point',
                name: 'point',
                children: [
                    {
                        path: "/info/:id",
                        name: "info",
                        meta: {

                        },
                        component: () => import('@/views/InfoView.vue')
                    },
                    {
                        path: "/ntf/add/:id",
                        name: "addntf",
                        meta: {

                        },
                        component: () => import('@/views/NtfView.vue')
                    },
                    {
                        path: "/mycard/add/:id",
                        name: "addmycard",
                        meta: {

                        },
                        component: () => import('@/views/MyCardView.vue')
                    }
                ]
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