<template>
  <button @click="confirm">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  methods: {
    confirm() {
      this.$router.push("/teams");
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("Component Route Guard", to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Component Route Leave Guard", to, from);
    const pageConfirm = confirm("벗어나시겠습니까");
    next(pageConfirm);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
