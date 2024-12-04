<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSurvey"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
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
    };
  },
  methods: {
    async loadSurvey() {
      const response = await fetch(
        "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json"
      );

      if (response.ok) {
        const data = await response.json();
        this.results = [];

        for (const key in data) {
          this.results.push({
            id: key,
            rating: data[key].rating,
            name: data[key].userName,
          });
        }
      }
    },
  },
  async mounted() {
    const response = await fetch(
      "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json"
    );

    if (response.ok) {
      const data = await response.json();
      for (const key in data) {
        this.results.push({
          key,
          rating: data[key].rating,
          name: data[key].userName,
        });
      }
    }
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
