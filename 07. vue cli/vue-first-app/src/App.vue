<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "id001",
          name: "Ronaldo",
          phone: "000 111 2222",
          email: "ronaldo@localhost.com",
        },
        {
          id: "id002",
          name: "Messi",
          phone: "333 093 3293",
          email: "messi@localhost.com",
        },
      ],
    };
  },
};
</script>
