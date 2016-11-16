import Vue from 'vue'
import App from './App.vue'
import Counter from './Counter.vue'
import Vuex from 'vuex'


Vue.use(Vuex)

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

new Vue({
  el: '#app',
  store,
  template: '<app/>',
  components: { App }
})
