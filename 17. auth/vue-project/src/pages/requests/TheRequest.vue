<template>
  <base-dialog :show="error !== null" @close="handleDialog" title="ERROR">{{
    error
  }}</base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>

      <ul>
        <request-item
          v-for="request in requests"
          :key="request.id"
          :email="request.email"
          :message="request.message"
        >
        </request-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  created() {
    this.loadRequests();
  },
  computed: {
    requests() {
      return this.$store.getters["requests/requests"];
    },
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.getters["requests/loadRequests"];
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
