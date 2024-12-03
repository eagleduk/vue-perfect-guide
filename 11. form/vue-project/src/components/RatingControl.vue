<template>
  <ul>
    <li :class="{ active: modelValue === 'p' }">
      <button type="button" @click="selectedOption('p')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'a' }">
      <button type="button" @click="selectedOption('a')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'g' }">
      <button type="button" @click="selectedOption('g')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    selectedOption(o) {
      this.$emit("update:modelValue", o);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #10cf5f;
}

.active button {
  color: #10cf5f;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: transparent;
}
</style>
