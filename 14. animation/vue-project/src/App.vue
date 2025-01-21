<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import UserList from "./components/UserList.vue";

export default {
  components: { UserList },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
      buttonVisible: false,
    };
  },
  methods: {
    enterCancelled(el) {
      console.log("enterCancelled", el);
    },
    leaveCancelled(el) {
      console.log("leaveCancelled", el);
    },
    beforeEnter(el) {
      console.log("beforeEnter", el);
    },
    enter(el) {
      console.log("enter", el);
    },
    afterEnter(el) {
      console.log("afterEnter", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave", el);
    },
    leave(el) {
      console.log("leave", el);
    },
    afterLeave(el) {
      console.log("afterLeave", el);
    },
    showButton() {
      this.buttonVisible = true;
    },
    hideButton() {
      this.buttonVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  transform: translateX(-150px);
}

.para-enter-from {
  transform: translateY(-50px) scale(0.4);
}

.para-enter-active {
  transition: transform 0.3s ease-out;
  /*
  animation: keyframes duration timing;
  */
}

.para-enter-to {
  transform: translateY(0px) scale(1);
}

.para-leave-from {
  transform: translateY(0px) scale(1);
}

.para-leave-active {
  transition: transform 0.3s ease-out;
}

.para-leave-to {
  transform: translateY(50px) scale(0.4);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-enter-from {
  opacity: 1;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.page-enter-active {
  transition: all 0.3s ease-in;
}

.page-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.page-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.page-leave-active {
  transition: all 0.3s ease-in;
}

.page-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
