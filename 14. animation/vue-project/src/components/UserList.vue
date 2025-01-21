<template>
  <transition-group tag="ul" name="user">
    <li v-for="user in userList" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userName" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: ["Messi"],
    };
  },
  methods: {
    addUser() {
      const user = this.$refs.userName.value;
      this.userList.unshift(user);
    },
    removeUser(user) {
      this.userList = this.userList.filter((u) => u !== user);
    },
  },
};
</script>

<style scope>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  padding: 1rem;
  border: 1px solid #ccc;
}

.user-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-enter-active {
  transition: all 0.4s ease-out;
}

.user-enter-to,
.user-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-leave-active {
  transition: all 0.4s ease-in;
}

.user-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-move {
  transition: all 0.4s ease;
}
</style>
