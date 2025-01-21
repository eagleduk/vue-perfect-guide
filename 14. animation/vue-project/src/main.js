import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import BaseModal from "./components/BaseModal.vue";
import UserPage from "./pages/UserPage.vue";
import TodoPage from "./pages/TodoPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: UserPage },
    { path: "/todo", component: TodoPage },
  ],
});

const app = createApp(App);

app.component("base-modal", BaseModal);

app.use(router);

app.mount("#app");
