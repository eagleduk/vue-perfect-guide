<template>
  <base-card>
    <form class="" @submit.prevent="submit">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>

      <p v-if="isInvalid">Please enter a valid eamil and password.</p>
      <div>
        <base-button>{{ submitButtonLabel }}</base-button>
        <base-button type="button" mode="flat" @click="switchMode"
          >{{ switchButtonLabel }} instead</base-button
        >
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isInvalid: false,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    switchButtonLabel() {
      return this.mode === "login" ? "Signup" : "Login";
    },
    submitButtonLabel() {
      return this.mode === "login" ? "Login" : "Signup";
    },
  },
  methods: {
    submit() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.isInvalid = true;
        return;
      }

      this.isLoading = true;

      try {
        if (this.mode === "login") {
          this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } else {
          this.$store.dispatch("signup", {
            email: this.email,
            password: this.password,
          });
        }
      } catch (err) {
        this.error = err.message;
      }

      this.isLoading = false;

      this.$router.replace("/coaches");
    },
    switchMode() {
      if (this.mode === "login") this.mode = "signup";
      else this.mode = "login";
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
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
</style>
