<template>
  <base-card>
    <form v-on:submit.prevent="add">
      <div class="form-control">
        <label for="title"> Title </label>
        <input name="title" id="title" type="text" v-model="title" />
      </div>

      <div class="form-control">
        <label for="description"> Description </label>
        <textarea
          name="description"
          id="descripton"
          rows="3"
          v-model="desciption"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link"> Link </label>
        <input name="link" id="link" type="url" v-model="link" />
      </div>

      <div class="form-control">
        <base-button> Add Resource </base-button>
      </div>
    </form>
  </base-card>

  <base-dialog v-if="dialog" @close="closeDialog">
    <template #header>
      <h2>Title input required.</h2>
    </template>
    <template #default>
      <p>Please Check Input Values.</p>
    </template>
    <template #menu>
      <base-button @click="closeDialog">Okay</base-button>
    </template>
  </base-dialog>
</template>

<script>
export default {
  inject: ["resources", "addResource"],
  data() {
    return {
      title: "",
      link: "",
      desciption: "",
      dialog: false,
    };
  },
  methods: {
    add() {
      if (this.title.trim().length === 0) {
        this.dialog = true;
        return;
      }
      this.addResource(this.title, this.desciption, this.link);
      this.title = "";
      this.desciption = "";
      this.link = "";
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
