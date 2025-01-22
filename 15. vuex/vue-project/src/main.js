import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    addOne(state) {
      state.counter = state.counter + 1;
    },
    add(state, payload) {
      state.counter = state.counter + payload.value;
    },
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    add(context, payload) {
      setTimeout(function () {
        context.commit("add", payload);
      }, 2000);
    },
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logOut");
    },
  },
  getters: {
    normalizeCounter(state) {
      return state.counter;
    },
    tripleCounter(_, getters) {
      return getters.normalizeCounter * 3;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
