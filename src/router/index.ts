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
                        path: "/member/edit",
                        name: "edit",
                        meta: {

                        },
                        component: () => import('@/views/EditView.vue')
                    },
                    {
                        path: "/member/order",
                        name: "order",
                        meta: {

                        },
                        component: () => import('@/views/OrderView.vue')
                    },                    
                    {
                        path: "/member/info",
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
                        path: "/point/info",
                        name: "info",
                        meta: {

                        },
                        component: () => import('@/views/InfoView.vue')
                    },
                    {
                        path: "/point/nft/add",
                        name: "addntf",
                        meta: {

                        },
                        component: () => import('@/views/NftView.vue')
                    },
                    {
                        path: "/point/mycard/add",
                        name: "addmycard",
                        meta: {

                        },
                        component: () => import('@/views/MyCardView.vue')
                    },
                    {
                        path: "/point/nft/query",
                        name: "querynft",
                        meta: {

                        },
                        component: () => import('@/views/QueryNFTView.vue')
                    },
                    {
                        path: "/point/pay/completed",
                        name: "completed",
                        meta: {

                        },
                        component: () => import('@/views/PayCompletedView.vue')
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