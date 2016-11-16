<template>
  <div class='.counter'>
    <div>
      <button class='btn waves-effect' v-on:click='decrement'>-</button>
      <span class='counter'>{{ counter }}</span>
      <button class='btn waves-effect' v-on:click='increment'>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: ['initialCounter'],
  data() {
    return {
      counter: this.initialCounter,
    }
  },
  methods: {
    increment() { this.counter++ },
    decrement() { this.counter-- }
  }
}
</script>

<style>
.counter {
  padding: 0.2em 1em;
  font-size: 1.1em;
}
</style>
