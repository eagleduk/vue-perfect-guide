const app = Vue.createApp({
  data() {
    return {
      inputGoalText: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoalText);
      this.inputGoalText = "";
    },
  },
});

app.mount("#user-goals");
