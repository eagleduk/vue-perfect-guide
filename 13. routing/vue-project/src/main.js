import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: "team-members",
          path: "/teams/:teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // { path: "/teams", component: TeamsList, alias: "/" },

    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log("Path Route Guard.", to, from);
        next();
      },
    },
    { path: "/:notFound(.*)", redirect: "/teams" },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach(function (to, from, next) {
  console.log("Global Route Guard.", to, from);
  next();
});

router.afterEach(function (to, from) {
  console.log("after Route Guard", to, from);
});

const app = createApp(App);

app.use(router);

app.mount("#app");
