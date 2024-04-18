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
                        path: "/point/addntf/:id",
                        name: "addntf",
                        meta: {

                        },
                        component: () => import('@/views/EditView.vue')
                    },
                    {
                        path: "/point/addmycard/:id",
                        name: "addmycard",
                        meta: {

                        },
                        component: () => import('@/views//InfoView.vue')
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