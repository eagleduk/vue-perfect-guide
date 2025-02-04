<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <div>
      <span class="filter-option">
        <input type="checkbox" id="frontend" checked @change="changeChecked" />
        <label for="frontend">Frontend</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="backend" checked @change="changeChecked" />
        <label for="backend">Backend</label>
      </span>
      <span class="filter-option">
        <input type="checkbox" id="career" checked @change="changeChecked" />
        <label for="career">Career</label>
      </span>
    </div>
  </base-card>
</template>

<script>
export default {
  emits: ["search-filter"],
  data() {
    return {
      filter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    changeChecked(event) {
      const id = event.target.id;
      const checked = event.target.checked;
      this.filter = {
        ...this.filter,
        [id]: checked,
      };
      this.$emit("search-filter", this.filter);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
