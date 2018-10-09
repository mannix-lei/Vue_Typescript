import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import UserInfo from '../components/UserInfo.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: UserInfo
        }
    ]
})

