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
      resources: [],
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
      removeResource: this.removeResource,
      addResource: this.addResource,
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desciption, link) {
      this.resources.push({
        id: Date.now().toString(),
        title: title,
        desciption: desciption,
        link: link,
      });
      this.selectedTab = "stored-resource";
    },
    removeResource(id) {
      const index = this.resources.findIndex((r) => r.id === id);
      this.resources.splice(index, 1);
    },
  },
};
</script>
