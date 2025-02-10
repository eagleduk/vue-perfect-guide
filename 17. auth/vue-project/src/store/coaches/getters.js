export default {
  coaches(state) {
    return state.coaches;
  },
  alreadyCoach(_, getters, _2, rootGetters) {
    return getters.coaches.some((c) => c.id === rootGetters.getUserId);
  },
  async loadCoaches(state) {
    const response = await fetch(
      `https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/findCoach/coaches.json`
    );
    if (!response.ok) {
      const error = new Error("Error to fetch Coaches" || error.message);
      throw error;
    }
    const data = await response.json();

    for (const id in data) {
      state.coaches.push({
        ...data[id],
        id,
      });
    }
  },
};
