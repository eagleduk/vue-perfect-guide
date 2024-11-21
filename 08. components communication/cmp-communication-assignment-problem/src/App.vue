<template>
  <h1>User</h1>
  <user-data @add-user="addUser" />
  <active-user
    v-for="user in users"
    :key="user.id"
    :name="user.name"
    :age="user.age"
  />
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(user) {
      this.users.push({ id: Date.now().toString(), ...user });
    },
  },
};
</script>
