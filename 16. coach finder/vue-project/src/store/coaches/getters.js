export default {
  coaches(state) {
    return state.coaches;
  },
  alreadyCoach(_, getters, _2, rootGetters) {
    return getters.coaches.some((c) => c.id === rootGetters.getUserId);
  },
};
