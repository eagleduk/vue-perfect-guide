<template>
  <button v-if="!isLoggedIn" @click="login">Log In</button>
  <button v-else @click="logOut">Log Out</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions({
      login: "login",
      logOut: "logout",
    }),
  },
};
</script>
