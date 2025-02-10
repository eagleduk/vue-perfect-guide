import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./authActions.js";

export default {
  state() {
    return {
      userId: null,
      idToken: null,
      expiresIn: null,
    };
  },
  getters,
  mutations,
  actions,
};
