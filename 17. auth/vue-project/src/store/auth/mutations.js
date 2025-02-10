export default {
  signup(state, payload) {
    state.userId = payload.userId;
    state.idToken = payload.idToken;
    state.expiresIn = payload.expiresIn;
  },
};
