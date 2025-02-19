<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import AlertMixin from "../mixins/Alert.js";

import UserAlert from "./UserAlert.vue";

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      title: "Delete the User?",
      alertIsVisible: true,
    };
  },
  mixins: [AlertMixin],
};
</script>
