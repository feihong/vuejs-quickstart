<template>
  <div id='app'>
    <h1>{{ message }}</h1>

    <div class='routes row'>
        <router-link class='col s2 offset-s3' to='/counter/42'>Counter A</router-link>
        <router-link class='col s2' to='/counter/666'>Counter B</router-link>
        <router-link class='col s2' to='/font-preview'>Font Preview</router-link>
    </div>

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

<style lang='stylus'>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

h1
  font-weight: normal

.routes .router-link-active
  border-bottom: 2px solid #333
</style>
