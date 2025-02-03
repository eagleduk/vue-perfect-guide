<template>
  <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button to="/register"> Register as Coach </base-button>
    </div>
    <ul>
      <coaches-item
        v-for="coach in searchCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      >
      </coaches-item>
    </ul>
  </base-card>
</template>

<script>
import CoachesItem from "../../components/coaches/CoachesItem.vue";

export default {
  components: {
    CoachesItem,
  },
  computed: {
    searchCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
