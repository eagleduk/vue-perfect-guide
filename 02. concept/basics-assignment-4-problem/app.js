const app = Vue.createApp({
  data() {
    return {
      classname: "",
      toggle: true,
      color: "",
    };
  },
  methods: {
    setClassname(event) {
      this.classname = event.target.value;
    },
    setToggle() {
      this.toggle = !this.toggle;
    },
    setColor(event) {
      this.color = event.target.value;
    },
  },
});

app.mount("#assignment");
