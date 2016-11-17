import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Counter from './Counter.vue'
import FontPreview from './FontPreview.vue'


Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setCount(state, n) { state.count = n },
    increment(state) { state.count++ },
    decrement(state) { state.count-- }
  }
})

const routes = [
  { path: '/counter/:number', component: Counter },
  { path: '/font-preview', component: FontPreview },
]

const router = new VueRouter({routes})

new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  components: { App }
})
