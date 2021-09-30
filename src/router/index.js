/*
 * @Description: 
 * @Author: wangXiaoMing
 * @Date: 2021-09-21 00:18:56
 * @LastEditTime: 2021-09-25 22:15:51
 * @LastEditors: wangXiaoMing
 */
import VueRouter from 'vue-router'
const Home = () => import('@/pages/Home.vue')
const CompanyIntroduce = () => import('@/pages/CompanyIntroduce.vue')
const AlertDetail = () => import('@/components/home/AlertDetail.vue')
const BussinessContactPurchase = () => import('@/pages/BussinessContactPurchase.vue')
const GarbagePurchase = () => import('@/pages/GarbagePurchase.vue')
const SecondHandPurchase = () => import('@/pages/SecondHandPurchase.vue')

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home',component: Home },
  { path: '/companyIntroduce',name: 'companyIntroduce', component: CompanyIntroduce },
  { path: '/alertDetail',name: 'alertDetail',component: AlertDetail },
  { path: '/bussinessContactPurchase',name: 'bussinessContactPurchase',component: BussinessContactPurchase },
  { path: '/garbagePurchase',name: 'garbagePurchase',component: GarbagePurchase },
  { path: '/secondHandPurchase',name: 'secondHandPurchase',component: SecondHandPurchase },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router 