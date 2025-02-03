<template>
  <base-card>
    <h2>{{ fullName }}</h2>
    <h3>${{ this.coach.hourlyRate }}/hour</h3>
  </base-card>
  <base-card>
    <h2>Interested? Reach out now!</h2>
    <base-button>Contact</base-button>
    <router-view></router-view>
  </base-card>
  <base-card>
    <base-badge
      v-for="area in this.coach.areas"
      :key="area"
      :text="area"
    ></base-badge>
    <p>
      {{ this.coach.description }}
    </p>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      coach: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    console.log(id, this.$store.getters["coaches/coaches"]);
    this.coach = this.$store.getters["coaches/coaches"].find(
      (c) => c.id === id
    );
  },
  computed: {
    fullName() {
      return this.coach.firstName + " " + this.coach.lastName;
    },
  },
};
</script>
