<template>
  <base-card>
    <base-button @click="selectTab('add-resource')" :mode="isAddResource">
      Add Resource
    </base-button>
    <base-button @click="selectTab('stored-resource')" :mode="isStoredResource">
      Stored Resources
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resource",
      resources: [
        {
          id: "001",
          title: "Res1",
          description: "Desc1",
          link: "https://vuejs.org",
        },
        {
          id: "002",
          title: "Res2",
          description: "Desc2",
          link: "https://google.com",
        },
      ],
    };
  },
  computed: {
    isAddResource() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
    isStoredResource() {
      return this.selectedTab === "stored-resource" ? null : "flat";
    },
  },
  provide() {
    return {
      resources: this.resources,
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
