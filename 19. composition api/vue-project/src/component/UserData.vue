<template>
  <h2>{{ uName }}</h2>
  <h2>{{ number }}</h2>
</template>
<script>
import { computed, inject } from "vue";

export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    context.emit("save"); // this.$emit("save");

    const number = inject("number");

    return {
      uName,
      number,
    };
  },
};
</script>
