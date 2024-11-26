<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 40vh;
  left: 30%;
  width: 40%;
  height: 20vh;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
</style>
