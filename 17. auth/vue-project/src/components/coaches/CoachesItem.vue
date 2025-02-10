<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hours</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :text="area"> </base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" :to="this.contactURL">Contact</base-button>
      <base-button :to="detailURL">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    detailURL() {
      return this.$route.path + "/" + this.id;
    },
    contactURL() {
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
