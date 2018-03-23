// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: App}
]

// 例子，自行對應到你項目的代碼
const routers = new VueRouter({
  mode: 'history', 
  routes,
  scrollBehavior (to, from, savedPosition) {
      // 如果你的連結是帶 # 這種
      // to.hash 就會有值(值就是連結)
      // 例如 #3
      if (to.hash) {
        return {
          // 這個是透過 to.hash 的值來找到對應的元素
          // 照你的 html 來看是不用多加處理這樣就可以了
          // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
          selector: to.hash
        }
      }
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  routers,
  components: { App },
  template: '<App/>'
})
