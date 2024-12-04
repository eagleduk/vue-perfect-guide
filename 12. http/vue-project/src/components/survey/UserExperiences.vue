<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurvey"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="loading">Loading....</p>
      <p v-if="!loading && error">
        {{ error }}
      </p>
      <p v-if="!loading && !error && results.length === 0">no Data.</p>
      <ul v-if="!loading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ["results"],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async loadSurvey() {
      this.results = [];
      this.error = null;
      this.loading = true;

      const response = await fetch(
        "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json"
      );

      if (response.ok) {
        const data = await response.json();

        for (const key in data) {
          this.results.push({
            id: key,
            rating: data[key].rating,
            name: data[key].userName,
          });
        }
      } else {
        console.log(response);
        this.error = response.statusText;
      }

      this.loading = false;
    },
  },
  async mounted() {
    await this.loadSurvey();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
