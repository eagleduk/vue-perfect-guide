<template>
  <form @submit.prevent="addUser">
    <div>
      <label for="name"> Name </label>
      <input id="name" v-model="name" />
    </div>
    <div>
      <label for="age"> Age </label>
      <input id="age" type="number" v-model="age" />
    </div>

    <div>
      <button>Add User</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", {
        name: this.name,
        age: this.age,
      });
    },
  },
};
</script>
