<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">Project 2</router-link>
  </section>
</template>

<script>
import { computed, inject, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const loadedProducts = inject("products");

    const p = computed(function () {
      return loadedProducts.value.find((l) => l.id === route.params.pid);
    });

    const title = computed(function () {
      return p.value.title;
    });
    const price = computed(function () {
      return p.value.price;
    });
    const description = computed(function () {
      return p.value.description;
    });

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
