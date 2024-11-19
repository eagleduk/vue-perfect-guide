<template>
  <li>
    <h2>
      {{ name }}
      {{ favorite ? "❤" : "" }}
    </h2>

    <button @click="toggleFavorite">
      {{ favorite ? "UnLike" : "Like" }}
    </button>

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
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      showToggle: false,
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetail() {
      this.showToggle = !this.showToggle;
    },
    toggleFavorite() {
      this.favorite = !this.favorite;
    },
  },
};
</script>
