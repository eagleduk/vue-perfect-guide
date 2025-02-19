import { computed, ref, watch } from "vue";

export default function useSearch(items, fieldName) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(function () {
    if (activeSearchTerm.value) {
      return items.value.filter((item) =>
        item[fieldName].includes(activeSearchTerm.value)
      );
    }
    return items.value;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
