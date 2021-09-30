/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-19 14:24:09
 * @LastEditTime: 2021-09-22 21:27:19
 * @LastEditors: wangXiaoMing
 */

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import i18n from '@/lang'
import VueRouter from 'vue-router'
import router from '@/router'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
