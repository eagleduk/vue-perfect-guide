<template>
  <base-dialog :show="error !== null" @close="handleDialog" title="ERROR">{{
    error
  }}</base-dialog>
  <section>
    <coaches-filter @search-filter="searchFilter"> </coaches-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click-event="loadCoaches"
          >Refresh</base-button
        >
        <base-button v-if="!isLoading && !alreadyCoach" to="/register">
          Register as Coach
        </base-button>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else>
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
      isLoading: false,
      error: null,
      filter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    alreadyCoach() {
      return this.$store.getters["coaches/alreadyCoach"];
    },
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
    searchFilter(filter) {
      this.filter = filter;
    },
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.getters["coaches/loadCoaches"];
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
    handleDialog() {
      this.error = null;
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
