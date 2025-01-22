<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <formatted-counter></formatted-counter>
    <button @click="addOne">+1</button>
    <add-counter></add-counter>
    <async-counter></async-counter>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import AddCounter from "./components/AddCounter.vue";
import FormattedCounter from "./components/FormattedCounter.vue";
import AsyncCounter from "./components/AsyncCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    AddCounter,
    FormattedCounter,
    AsyncCounter,
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
