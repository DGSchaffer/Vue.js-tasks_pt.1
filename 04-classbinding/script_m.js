Vue.createApp({
  data() {
    return {
      activeLetter: "",
    };
  },
  methods: {
    setActiveLetter(letter) {
      this.activeLetter = letter;
    },
  },
}).mount("#app");
