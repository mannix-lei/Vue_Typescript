import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import UserInfo from '../components/UserInfo.vue'
import Test from '../components/Test.vue'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            meta:{
                useCache:false,
                keepAlive: true
            }
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: UserInfo,
            meta:{
                useCache: false,
                keepAlive: true
            }
        },
        {
            path: '/test',
            name: 'test',
            component: Test,
            meta:{
                useCache: false,
                keepAlive: true
            }
        }
    ]
})

