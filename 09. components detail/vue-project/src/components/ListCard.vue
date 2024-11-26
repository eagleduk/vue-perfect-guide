<template>
  <ul>
    <li v-for="data in datas">
      <slot :title="data" :time="new Date().toLocaleString()"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      datas: ["1", "2", "3"],
    };
  },
};
</script>
