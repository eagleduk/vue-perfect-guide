<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="toggle">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleEvent">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
  <section>
    <p>
      <label>Name : </label>
      <span>{{ name }}</span>
    </p>
    <p>
      <label>Age : </label>
      <span>{{ age }}</span>
    </p>
  </section>
  <section>
    <p>
      <label>Name : </label>
      <span>{{ player1.name }}</span>
    </p>
    <p>
      <label>Age : </label>
      <span>{{ player1.age }}</span>
    </p>
  </section>
  <section>
    <p>
      <label>Name : </label>
      <span>{{ player2.name }}</span>
    </p>
    <p>
      <label>Age : </label>
      <span>{{ player2.age }}</span>
    </p>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const goal = ref("OUTPUT COURSE GOAL");

const toggle = ref(true);
function toggleEvent() {
  toggle.value = !toggle.value;
}

const name = ref("Messi");
const age = ref("38");

const player1 = ref({
  name: "Ronaldo",
  age: 40,
});

const player2 = reactive({
  name: "Rooney",
  age: 40,
});
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
