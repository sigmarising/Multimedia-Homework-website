import Vue from 'vue'
import Router from 'vue-router'
import vAboutMe from '@/views/vAboutMe.vue'
import vProj1 from '@/views/vProj1.vue'
import vProj2 from '@/views/vProj2.vue'
import vProj3 from '@/views/vProj3.vue'
import vProj4 from '@/views/vProj4.vue'
import vFtp from '@/views/vFtp.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: vAboutMe
        },
        {
            path: '/aboutme',
            component: vAboutMe
        },
        {
            path: '/proj1',
            component: vProj1
        },
        {
            path: '/proj2',
            component: vProj2
        },
        {
            path: '/proj3',
            component: vProj3
        },
        {
            path: '/proj4',
            component: vProj4
        },
        {
            path: '/ftp',
            component: vFtp
        },
    ]
})
