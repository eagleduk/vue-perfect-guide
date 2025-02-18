<template>
  <h2>{{ uName }}</h2>
</template>
<script>
import { computed } from "vue";

export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    context.emit("save"); // this.$emit("save");

    return {
      uName,
    };
  },
};
</script>
