import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store/index.js";

export const asyncRoutes = [
    {
        path: 'goods',
        name: 'goods',
        children: [
            {
                path: 'list',
                name: 'goodsList',
                component: () => import('../pages/goods/list/index.vue')
            },
            {
                path: 'detail',
                name: 'goodsDetail',
                component: () => import('../pages/goods/detail/index.vue')
            }
        ]
    }
]

const constantRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login/index.vue')
    }
]
const routes = [
    {
        path: '',
        redirect: 'login'
    },
    {
        path: '/admin',
        name: 'admin',
        children: []
    },
    ...constantRoutes
]
const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

router.options.(error => {
    console.log('error', error)
})

const addRoutes = (router, routes, path) => {
    routes.forEach(route => {
        console.log('path', path)
        route.path = path + '/'+route.path
        console.log('path 2', route.path)
        router.addRoute(route)
        if(route.children){
            addRoutes(router, route.children, route.path.slice(0, -1))
        }
    })
}

router.beforeEach((to, from, next) => {
    console.log(store.state.routes.length)
    if(store.state.routes.length === 0){
        store.dispatch('GenerateRoutes').then(() => {
            // router.addRoute(store.getters.addRoutes)
            addRoutes(router, store.getters.addRoutes, '/admin')
            next({
                ...to,
                replace: true,
            })
        })
    } else {
        next();
    }
})

window.router = router;

export default router;