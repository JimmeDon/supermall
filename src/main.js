import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/Toast'
import VueLazyLoad from 'vue-lazyload'
import Fastclick from 'fastclick'

Vue.config.productionTip = false
//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

Vue.use(VueLazyLoad)

Fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
