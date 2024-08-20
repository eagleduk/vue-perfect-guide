const app = Vue.createApp({
  data() {
    return {
      goal: "the course and learn Vue",
      link: "https://vuejs.org/",
      htmltag: "<h3>Hello World!</h3>",
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
