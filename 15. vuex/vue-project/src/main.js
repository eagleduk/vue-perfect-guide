import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    addOne(state) {
      state.counter = state.counter + 1;
    },
    add(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    normalizeCounter(state) {
      return state.counter;
    },
    tripleCounter(_, getters) {
      return getters.normalizeCounter * 3;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
