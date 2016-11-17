<template>
  <div id='app'>
    <h1>{{ message }}</h1>

    <counter :initialCounter='42' />
    <font-preview />
  </div>
</template>

<script>
import Counter from './Counter.vue'
import FontPreview from './FontPreview.vue'

export default {
  name: 'app',
  data() {
    return {
      message: 'Welcome to your Vue.js app'
    }
  },
  components: { Counter, FontPreview }
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
