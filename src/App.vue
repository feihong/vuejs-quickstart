<template>
  <div id='app'>
    <h1>{{ message }}</h1>
    <div>
      <button class='btn waves-effect' v-on:click='decrement'>-</button>
      <span class='counter blue darken-2 white-text'>{{ counter }}</span>
      <button class='btn waves-effect' v-on:click='increment'>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Welcome to your Vue.js App',
      counter: 0,
    }
  },
  methods: {
    increment() { this.counter++ },
    decrement() { this.counter-- }
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
.counter {
  padding: 0.2em 1em;
  text-align: center;
  font-size: 1.1em;
}
h1 {
  font-weight: normal;
}
</style>
