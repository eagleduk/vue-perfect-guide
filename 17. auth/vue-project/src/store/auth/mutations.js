export default {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.idToken = payload.idToken;
  },
  logout(state) {
    state.userId = null;
    state.idToken = null;
  },
};
