const app = Vue.createApp({
  data() {
    return {
      selectA: false,
      selectB: false,
      selectC: false,
    };
  },
  computed: {
    boxASelected() {
      return { active: this.selectA };
    },
    boxCSelected() {
      return ["demo", { active: this.selectC }];
    },
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
