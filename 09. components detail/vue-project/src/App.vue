<template>
  <div>
    <TheHeader />
    <badge-list />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>

  <ListCard>
    <template #default="props">
      <h2>
        {{ props.title }}
      </h2>
      <p>
        {{ props.time }}
      </p>
    </template>
  </ListCard>

  <div>
    <p>
      <button @click="selectTabAction('tab-a-component')">Tab A</button>
      <button @click="selectTabAction('TabBComponent')">Tab B</button>
    </p>

    <KeepAlive>
      <component :is="selectedTab"></component>
    </KeepAlive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import ListCard from "./components/ListCard.vue";
import TabAComponent from "./components/TabAComponent.vue";
import TabBComponent from "./components/TabBComponent.vue";

export default {
  components: {
    TheHeader,
    "badge-list": BadgeList,
    UserInfo: UserInfo,
    ListCard,
    TabAComponent,
    TabBComponent,
  },
  data() {
    return {
      selectedTab: "tab-a-component",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    selectTabAction(cmp) {
      this.selectedTab = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
