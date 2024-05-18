import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "index",
        component: () => import('@/views/IndexView.vue'),
    },
    {
        path: "/home",
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
                        path: "/point/mycard/buy",
                        name: "buymycard",
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
    },
    {
        path: "/console",
        name: "console",
        meta: {

        },
        children: [
            {
                path: "/console/mycardpool",
                name: "mycardpool",
                meta: {

                },
                component: () => import('@/components/MyCardPool.vue')
            },
            {
                path: "/console/addmycard",
                name: "addmycard",
                meta: {

                },
                component: () => import('@/components/AddMyCard.vue')
            },
            {
                path: "/console/newnft",
                name: "newnft",
                meta: {

                },
                component: () => import('@/components/NewNft.vue')
            }
        ],
        component: () => import('@/views/ConsoleView.vue')
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});