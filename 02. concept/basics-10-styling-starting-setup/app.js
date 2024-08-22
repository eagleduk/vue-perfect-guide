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
      if (v === "A") this.selectA = !this.selectA;
      if (v === "B") this.selectB = !this.selectB;
      if (v === "C") this.selectC = !this.selectC;
    },
  },
});

app.mount("#styling");
