const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstname: "",
      fullname: "",
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setFirstName(event) {
      this.firstname = event.target.value;
    },
    setFullName(event, firstname) {
      console.log(event);
      this.fullname = firstname + " " + event.target.value;
    },
  },
});

app.mount("#events");
