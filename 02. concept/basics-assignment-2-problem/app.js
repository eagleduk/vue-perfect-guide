const app = Vue.createApp({
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    showAlert() {
      alert("Show Alert");
    },
    setFirstName(event) {
      console.log(event);
      this.firstname = event.target.value;
    },
    setLastName(event) {
      this.lastname = event.target.value;
    },
  },
});

app.mount("#assignment");
