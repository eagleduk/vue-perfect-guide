import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachesDetail from "./pages/coaches/CoachesDetail.vue";
import CoachesContact from "./pages/coaches/CoachesContact.vue";
import CoachesRegister from "./pages/coaches/CoachesRegister.vue";
import TheRequest from "./pages/requests/TheRequest.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachesDetail,
      children: [{ path: "contact", component: CoachesContact }],
    },
    { path: "/register", component: CoachesRegister },
    { path: "/requests", component: TheRequest },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
