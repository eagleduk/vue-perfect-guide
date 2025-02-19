import { ref, computed } from "vue";

export default function useSort(items, fieldName) {
  const sorting = ref(null);

  const filteredItems = computed(function () {
    if (!sorting.value) {
      return items.value;
    }
    return items.value.sort((u1, u2) => {
      if (sorting.value === "asc" && u1[fieldName] > u2[fieldName]) {
        return 1;
      } else if (sorting.value === "asc") {
        return -1;
      } else if (sorting.value === "desc" && u1[fieldName] > u2[fieldName]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return {
    sorting,
    filteredItems,
    sort,
  };
}
