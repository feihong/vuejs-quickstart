<template>
  <div id='app'>
    <h1>{{ message }}</h1>
    <counter :initialCounter='42' />
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: 'app',
  data() {
    return {
      message: 'Welcome to your Vue.js App'
    }
  },
  components: { Counter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-weight: normal;
}
</style>
