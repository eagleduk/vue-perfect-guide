import { createApp } from "vue";
import router from "./router";

const app = createApp(null);

app.use(router);

app.mount("#app");
