import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Icon, Row, Col, Menu, MenuItem, Divider, Empty } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'

// 按需引入名單：

Vue.use(animated)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Divider)
Vue.use(Empty)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
