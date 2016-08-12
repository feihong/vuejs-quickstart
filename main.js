new Vue({
    el: '#app',
    data: {
      a: 3
    },
    computed: {
      b: function() { return this.a + 1 },
      c: function() { return this.a * 2 }
    },
    methods: {
      increment: function() {
        this.a += 1
      },
      decrement: function() {
        this.a -= 1
      }
    }
})
