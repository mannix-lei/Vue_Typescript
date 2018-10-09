import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/home',
            component: HelloWorld
        }
    ]
})
export default router
