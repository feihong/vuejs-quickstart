<template>
  <div id='app'>
    <h1>{{ message }}</h1>
    <p class='reversed'>Reversed:
      <span class='blue-text'>{{ reversedMessage }}</span>
    </p>
    <counter :initialCounter='42' />
  </div>
</template>

<script>
import Counter from './Counter.vue'

export default {
  name: 'app',
  data() {
    return {
      message: 'Welcome to your Vue.js app'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
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
.reversed {
  padding: 0.5em 0;
  border: 1px dashed grey;
  border-radius: 3px;
}
h1 {
  font-weight: normal;
}
</style>
