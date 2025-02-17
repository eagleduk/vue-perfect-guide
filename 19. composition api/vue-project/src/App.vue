<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
  <section class="container">
    <p>
      <label for="">EPL : </label>
      <span>{{ team.epl }}</span>
    </p>
    <p>
      <label for="">K-league : </label>
      <span>{{ team.K }}</span>
    </p>
  </section>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const uName = ref("Ronaldo");

    const team = reactive({
      epl: "Man.UTD",
      K: "FC.Seoul",
    });

    setTimeout(() => {
      uName.value = "Messi";
    }, 3000);

    setTimeout(() => {
      team.epl = "ManCity";
      team.K = "SaungNam.FC";
    }, 4000);

    return {
      userName: uName,
      team,
    };
  },
  // data() {
  //   return {
  //     userName: "Maximilian",
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
