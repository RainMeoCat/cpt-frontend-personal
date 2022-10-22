import Vue from 'vue'
import VueRouter from 'vue-router'
import Mobile from '../views/Mobile.vue'
import Pc from '../views/Pc.vue'

Vue.use(VueRouter)

let routes = []
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
  // 偵測到手機版
  routes = [
    {
      path: '/cpt-pet-cats/',
      name: 'Mobile',
      component: Mobile
    }
  ]
} else {
  // 偵測到電腦版
  routes = [
    {
      path: '/cpt-pet-cats/',
      name: 'Pc',
      component: Pc
    }
  ]
}

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
