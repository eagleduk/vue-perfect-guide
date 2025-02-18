<template>
  <h2>{{ uName }}</h2>
  <h2>{{ number }}</h2>
</template>
<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    onBeforeMount(function () {
      console.log("onBeforeMount");
    });
    onMounted(function () {
      console.log("onMounted");
    });

    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });
    onUpdated(function () {
      console.log("onUpdated");
    });

    onBeforeUnmount(function () {
      console.log("onBeforeUnmount");
    });
    onUnmounted(function () {
      console.log("onUnmounted");
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
