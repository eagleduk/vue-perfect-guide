<template>
  <coaches-form @add-coach="addCoach"></coaches-form>
</template>

<script>
import CoachesForm from "../../components/coaches/CoachesForm.vue";
export default {
  components: {
    CoachesForm,
  },
  methods: {
    addCoach(data) {
      this.$store.dispatch("coaches/add", data);
      this.$router.replace("/");
    },
  },
};
</script>
