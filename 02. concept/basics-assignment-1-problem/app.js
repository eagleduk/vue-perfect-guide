const app = Vue.createApp({
  data() {
    return {
      name: "Eagleduk. Lee",
      age: 44,
      image: "https://picsum.photos/200/300",
    };
  },
  methods: {
    getFavoriteNumber() {
      return parseInt(Math.random());
    },
  },
});

app.mount("#assignment");
