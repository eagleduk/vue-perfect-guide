const app = Vue.createApp({
  data() {
    return {
      selectA: false,
      selectB: false,
      selectC: false,
    };
  },
  methods: {
    selectBox(v) {
      if (v === "A") this.selectA = true;
      if (v === "B") this.selectB = true;
      if (v === "C") this.selectC = true;
    },
  },
});

app.mount("#styling");
