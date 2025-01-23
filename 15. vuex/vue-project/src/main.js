import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const counterModule = {
  namespaced: true,
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
  actions: {
    add(context, payload) {
      setTimeout(function () {
        context.commit("add", payload);
      }, 2000);
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
};

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logOut");
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
