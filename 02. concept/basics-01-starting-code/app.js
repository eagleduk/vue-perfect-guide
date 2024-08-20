const app = Vue.createApp({
  data() {
    return {
      goal: "Finish the course and learn Vue!",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
  },
});

app.mount("#user-goal");
