<template lang='pug'>
div.counter
  button.btn.waves-effect(v-on:click='decrement') -
  span.counter {{count}}
  button.btn.waves-effect(v-on:click='increment') +
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

<style lang='stylus'>
.counter
  padding: 0.2em 1em
  font-size: 1.1em
</style>
