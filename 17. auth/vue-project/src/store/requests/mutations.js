export default {
  async add(state, payload) {
    const userId = payload.coachId;

    const response = await fetch(
      `https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/findCoach/requests/${userId}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          message: payload.message,
        }),
      }
    );

    if (!response.ok) {
    }

    state.requests.push(payload);
  },
};
