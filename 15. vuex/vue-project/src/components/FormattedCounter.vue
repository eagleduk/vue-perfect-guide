<template>
  <h2>{{ tripleCounter }}</h2>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("counter", ["tripleCounter"]),
  },
};
</script>
