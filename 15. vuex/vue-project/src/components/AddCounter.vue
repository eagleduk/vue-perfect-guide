<template>
  <button @click="addOne">+ 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit("addOne");
    },
  },
};
</script>
