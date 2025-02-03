import { createStore } from "vuex";

import Coaches from "./coaches/index.js";

export default createStore({
  modules: {
    coaches: Coaches,
  },
});
