<template>
  <li>
    <h2>
      {{ name }}
    </h2>

    <button @click="toggleDetail">
      {{ showToggle ? "Hide" : "Show" }} Detail
    </button>

    <ul v-if="this.showToggle">
      <li>
        <strong>Phone: </strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: false,
      default: "None",
      validator: function (value) {
        return true;
      },
    },
  },
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
