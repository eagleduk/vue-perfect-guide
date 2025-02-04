import { createStore } from "vuex";

import Coaches from "./coaches/index.js";

export default createStore({
  modules: {
    coaches: Coaches,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
});
