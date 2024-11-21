<template>
  <form @:submit.prevent="addFriend">
    <div>
      <label for="name">Name</label>
      <input id="name" v-model="name" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input id="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" v-model="email" />
    </div>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style></style>
