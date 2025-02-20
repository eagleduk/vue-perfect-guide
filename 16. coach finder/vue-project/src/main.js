import { createApp } from "vue";

import router from "./router";
import App from "./App.vue";

import BaseCard from "./components/BaseCard.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseSpinner from "./components/BaseSpinner.vue";
import BaseDialog from "./components/BaseDialog.vue";

import store from "./store/index.js";

const app = createApp(App);

app.use(router);

app.use(store);

app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
