<template>
  <li>
    <h2>
      {{ name }}
      {{ isFavorite ? "❤" : "" }}
    </h2>

    <button @click="toggleFavorite">
      {{ isFavorite ? "UnLike" : "Like" }}
    </button>

    <button @click="toggleDetail">
      {{ showToggle ? "Hide" : "Show" }} Detail
    </button>

    <button @click="deleteFriend">Delete</button>

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
    id: {
      type: String,
      required: true,
    },
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
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.error("ID is missing!");
        return false;
      }
    },
    "delete-friend": function (id) {
      if (id) {
        return true;
      } else {
        console.error("ID is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      showToggle: false,
    };
  },
  methods: {
    toggleDetail() {
      this.showToggle = !this.showToggle;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
