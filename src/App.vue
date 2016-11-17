<template>
  <div id='app'>
    <h1>{{ message }}</h1>

    <p>
      <router-link to='/counter'>Counter</router-link>
      |
      <router-link to='/font-preview'>Font Preview</router-link>
    </p>

    <router-view></router-view>
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
  }
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
