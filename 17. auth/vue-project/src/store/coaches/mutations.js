export default {
  async add(state, payload) {
    const userId = payload.id;

    const response = await fetch(
      `https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/findCoach/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          areas: payload.areas,
          description: payload.description,
          firstName: payload.firstName,
          hourlyRate: payload.hourlyRate,
          lastName: payload.lastName,
        }),
      }
    );

    if (!response.ok) {
    }
    state.coaches.push(payload);
  },
};
