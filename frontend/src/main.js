import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Icon, Row, Col, Menu, MenuItem, Divider, Empty, Collapse, CollapseItem, Link, Timeline, TimelineItem, Progress, Scrollbar, Drawer, Loading, Container, Message, Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import data from './views/Data.js'
import VueAnalytics from 'vue-analytics'
import Meta from 'vue-meta'

// SEO部分
Vue.use(Meta)
Vue.use(VueAnalytics, {
  id: 'UA-172858412-2',
  router
})
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
Vue.use(Container)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.prototype.$Global_data = data
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
