import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Icon, Row, Col, Menu, MenuItem, Divider, Empty, Collapse, CollapseItem, Link, Timeline, TimelineItem, Progress, Scrollbar, Drawer, Loading } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 按需引入名單：

Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Timeline)
Vue.use(Link)
Vue.use(TimelineItem)
Vue.use(Scrollbar)
Vue.use(Progress)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Divider)
Vue.use(Empty)
Vue.use(Drawer)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
