<template>
  <button @click="addOne">+ 10</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.commit("addOne", {value: 10});
      this.$store.commit({
        type: "add",
        value: 10,
      });
    },
  },
};
</script>
