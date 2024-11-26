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
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import ListCard from "./components/ListCard.vue";

export default {
  components: {
    TheHeader,
    "badge-list": BadgeList,
    UserInfo: UserInfo,
    ListCard,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
