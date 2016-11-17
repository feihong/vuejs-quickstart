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
  created() {
    this.$store.commit('setCount', parseInt(this.$route.params.number))
  },
  watch: {
    '$route' (val) {
      this.$store.commit('setCount', parseInt(this.$route.params.number))
    }
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
