<template>
  <section>
    <coaches-filter @search-filter="serchFilter"> </coaches-filter>
  </section>
  <section>
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
  </section>
</template>

<script>
import CoachesItem from "../../components/coaches/CoachesItem.vue";
import CoachesFilter from "@/components/coaches/CoachesFilter.vue";

export default {
  components: {
    CoachesItem,
    CoachesFilter,
  },
  data() {
    return {
      filter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    searchCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.filter.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.filter.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.filter.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    serchFilter(filter) {
      this.filter = filter;
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
