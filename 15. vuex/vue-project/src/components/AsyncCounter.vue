<template>
  <button @click="add">+ 1 (async)</button>
  <button @click="ad({ value: 10 })">+ 10 (async)</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    add() {
      this.$store.dispatch("counter/add", {
        value: 4,
      });
    },
    ...mapActions("counter", {
      ad: "add",
    }),
  },
};
</script>
