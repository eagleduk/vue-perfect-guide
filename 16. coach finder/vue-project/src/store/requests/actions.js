export default {
  add(context, data) {
    context.commit("add", {
      ...data,
      id: Date.now(),
    });
  },
};
