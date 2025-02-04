export default {
  add(context, data) {
    const userId = context.rootGetters.getUserId;

    context.commit("add", {
      ...data,
      id: userId,
    });
  },
};
