<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team2</router-link>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  inject: ["teams", "users"],
  props: ["teamId"],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    setMembers(newTeamId) {
      const selectTeam = this.teams.find((t) => t.id === newTeamId);
      this.teamName = selectTeam.name;
      const teamMembers = [];
      for (const member of selectTeam.members) {
        const selectUser = this.users.find((t) => t.id === member);
        teamMembers.push(selectUser);
      }
      this.members = teamMembers;
    },
  },
  watch: {
    teamId(newTeamId) {
      this.setMembers(newTeamId);
      console.log(this.$route.query);
    },
  },
  created() {
    this.setMembers(this.teamId);
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Update Route Guard", to, from);
    next();
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
