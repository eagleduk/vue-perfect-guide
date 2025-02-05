export default {
  requests(state, _, _2, rootGetters) {
    const userId = rootGetters.getUserId;
    return state.requests.filter((request) => request.coachId === userId);
  },
};
