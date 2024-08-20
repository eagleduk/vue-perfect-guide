const app = Vue.createApp({
  data() {
    return {
      goal: "the course and learn Vue",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.goal + "!!";
    },
  },
});

app.mount("#user-goal");
