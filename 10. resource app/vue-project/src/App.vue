<template>
  <the-header title="Remember"></the-header>
  <stored-resource :resources="resources"></stored-resource>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import StoredResource from "./components/learning-resources/StoredResource.vue";

export default {
  components: {
    TheHeader,
    StoredResource,
  },
  data() {
    return {
      resources: [
        {
          id: "001",
          title: "Res1",
          description: "Desc1",
          link: "https://vuejs.org",
        },
        {
          id: "002",
          title: "Res2",
          description: "Desc2",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
