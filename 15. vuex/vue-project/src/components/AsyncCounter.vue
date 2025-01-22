<template>
  <button @click="add">+ 1 (async)</button>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.dispatch("add", {
        value: 4,
      });
    },
  },
};
</script>
