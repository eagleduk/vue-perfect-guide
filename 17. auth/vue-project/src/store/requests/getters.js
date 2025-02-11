export default {
  requests(state, _, _2, rootGetters) {
    return state.requests;
  },
  async loadRequests(state, _, _2, rootGetters) {
    const userId = rootGetters.getUserId;
    const token = rootGetters.getToken;

    const response = await fetch(
      `https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/findCoach/requests/${userId}.json?auth=${token}`
    );
    if (!response.ok) {
      const error = new Error("Error to fetch Requests" || error.message);
      throw error;
    }
    const data = await response.json();

    for (const id in data) {
      state.requests.push({
        ...data[id],
        id,
      });
    }
  },
};
