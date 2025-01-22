<template>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>

  <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <formatted-counter></formatted-counter>
    <button @click="addOne">+1</button>
    <add-counter></add-counter>
    <async-counter></async-counter>
  </base-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import AddCounter from "./components/AddCounter.vue";
import FormattedCounter from "./components/FormattedCounter.vue";
import AsyncCounter from "./components/AsyncCounter.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    AddCounter,
    FormattedCounter,
    AsyncCounter,
    UserAuth,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
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
