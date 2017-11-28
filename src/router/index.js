import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index/index'
import home from '@/page/index/children/home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            to.meta.position = savedPosition
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '',
            redirect: '/index'
        },
        {
            name: 'index',
            path: '/index',
            redirect: '/index/home',
            component: index,
            children: [
                {
                    name: 'home',
                    path: 'home',
                    component: home
                }
            ]
        }
    ]
})
