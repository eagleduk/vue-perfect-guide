const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) return "Not there yet";
      return "Too much!";
    },
  },
  methods: {
    addNum(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
