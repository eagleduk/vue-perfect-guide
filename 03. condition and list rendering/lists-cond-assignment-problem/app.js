const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      toggle: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    changeToggle() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount("#assignment");
