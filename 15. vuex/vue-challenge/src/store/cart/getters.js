export default {
  items(state) {
    return state.items;
  },
  total(state) {
    return state.total.toFixed(2);
  },
  qty(state) {
    return state.qty;
  },
};
