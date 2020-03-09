import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            title: '首页'
        },
        hidden: true
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
            title: '登录页'
        },
        hidden: true
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/views/Layout'),
        meta: {
          title: '用户管理'
        },
        children: [
            {
                path: 'index',
                component: () => import('@/views/Container'),
                meta: {
                    title: '欢迎页'
                }
            },
            {
                path: 'useradmin',
                component: ()=> import('@/views/Useradmin'),
                meta: {
                    title: '管理员管理'
                }
            },
            {
                path: 'adduseradmin',
                component: ()=>import('@/views/AddUserAdmin'),
                meta: {
                    title: '添加管理员'
                }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
