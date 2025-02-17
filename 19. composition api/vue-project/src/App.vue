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
    <button @click="setData">New Data</button>
  </section>

  <section class="container">
    <input type="text" @input="setFirstName" />
    <input type="text" @input="setLastName" />
    <h2>{{ uName }}</h2>
  </section>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
  setup() {
    const uName = ref("Ronaldo");
    setTimeout(function () {
      uName.value = "Messi";
    }, 2000);

    const team = reactive({
      epl: "Man.UTD",
      K: "FC.Seoul",
    });

    function setData() {
      team.epl = "ManCity";
      team.K = "SaungNam.FC";
    }

    const firstName = ref("");
    const lastName = ref("");
    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }
    const userName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    return {
      userName: uName,
      team,
      setData,
      uName: userName,
      setFirstName,
      setLastName,
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
