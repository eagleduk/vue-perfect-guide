import { createStore } from "vuex";

import auth from "./auth/index.js";
import product from "./product/index.js";
import cart from "./cart/index.js";

const store = createStore({
  modules: {
    auth,
    product,
    cart,
  },
});

export default store;
