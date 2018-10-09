import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuetify)
Vue.config.productionTip = false;

// @ts-ignore
Vue.use(axios)
// @ts-ignore
Vue.use(moment)
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
