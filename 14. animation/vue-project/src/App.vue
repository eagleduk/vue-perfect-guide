<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <button @click="toggleParagraph">Show Paragraph</button>
    <transition
      name="para"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paragraphIsVisible">Display this TEXT.</p>
    </transition>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="hideButton" v-if="buttonVisible">Hide Button</button>
      <button @click="showButton" v-else>Show Button</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
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
</style>
