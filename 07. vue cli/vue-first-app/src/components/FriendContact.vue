<template>
  <li>
    <h2>
      {{ friend.name }}
    </h2>

    <button @click="toggleDetail">Show Detail</button>

    <ul v-if="this.showToggle">
      <li>
        <strong>Phone: </strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showToggle: false,
      friend: {
        id: "id001",
        name: "Ronaldo",
        phone: "000 111 2222",
        email: "ronaldo@localhost.com",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.showToggle = !this.showToggle;
    },
  },
};
</script>
