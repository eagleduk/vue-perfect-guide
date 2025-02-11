export default {
  getUserId(state) {
    return state.userId;
  },
  isLoggin(state) {
    return state.idToken !== null;
  },
  getToken(state) {
    return state.idToken;
  },
};
