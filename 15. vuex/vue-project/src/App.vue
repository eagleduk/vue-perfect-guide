<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">+1</button>
    <add-counter></add-counter>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import AddCounter from "./components/AddCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    AddCounter,
  },
  methods: {
    addOne() {
      this.$store.commit("addOne");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
