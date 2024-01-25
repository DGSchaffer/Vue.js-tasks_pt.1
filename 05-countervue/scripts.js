Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    resetCount() {
      this.count = 0;
    },
  },
}).mount("#app");
