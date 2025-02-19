import { ref } from "vue";

export default function useAlert(defaultOpen = false) {
  const alertIsVisible = ref(defaultOpen);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }
  return [alertIsVisible, showAlert, hideAlert];
}
