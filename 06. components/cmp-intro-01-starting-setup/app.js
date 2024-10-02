const app = Vue.createApp({});

app.component("friend-content", {
  template: `
    <li>
        <h2>Manuel Lorenz</h2>
        <button @click="toggleDetail">{{ showDetail ? "hide" : "Show"}} Details</button>
        <ul v-if="showDetail">
            <li><strong>Phone:</strong> 01234 5678 991</li>
            <li><strong>Email:</strong> manuel@localhost.com</li>
        </ul>
    </li>
    `,
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    toggleDetail() {
      this.showDetail = !this.showDetail;
    },
  },
});

app.mount("#app");
