<template>
  <div class='.counter'>
    <div>
      <button class='btn waves-effect' v-on:click='decrement'>-</button>
      <span class='counter'>{{ count }}</span>
      <button class='btn waves-effect' v-on:click='increment'>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: ['initialCounter'],
  created() {
    this.$store.commit('setCount', this.initialCounter)
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() { this.$store.commit('increment') },
    decrement() { this.$store.commit('decrement') }
  }
}
</script>

<style>
.counter {
  padding: 0.2em 1em;
  font-size: 1.1em;
}
</style>
