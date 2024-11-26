<template>
  <div>
    <h2>Tab A</h2>
    <input type="text" ref="input" />
    <button @click="checkInput">Add</button>
  </div>
  <teleport to="body">
    <ErrorAlert v-if="invalidInput">
      <h2>Invalid Data</h2>
      <p>Please, input Data</p>
      <button @click="confirmError">Close</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      invalidInput: false,
    };
  },
  methods: {
    checkInput() {
      const input = this.$refs.input.value;
      if (input.trim() === "") {
        this.invalidInput = true;
      }
    },
    confirmError() {
      this.invalidInput = false;
    },
  },
};
</script>
