<template>
  <section>
    <base-card>
      <form @submit.prevent="submit">
        <div class="form-control">
          <label id="email"> Your E-Mail </label>
          <input type="email" id="email" v-model.trim="email" />
        </div>

        <div class="form-control">
          <label id="message"> Message </label>
          <textarea id="message" rows="5" v-model.trim="message"></textarea>
        </div>

        <p class="errors" v-if="inValid">
          Please enter a valid email and message.
        </p>

        <div class="actions">
          <base-button> Send Message </base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      inValid: false,
    };
  },
  methods: {
    submit() {
      if (
        this.email.length === 0 ||
        !this.email.includes("@") ||
        this.message.length === 0
      ) {
        this.inValid = true;
        return;
      }
      const id = this.$route.params.id;

      const request = {
        email: this.email,
        message: this.message,
        coachId: id,
      };
      this.$store.dispatch("requests/add", request);

      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
