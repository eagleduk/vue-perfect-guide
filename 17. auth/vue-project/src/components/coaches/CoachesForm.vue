<template>
  <base-card>
    <h2>Register as a coach now!</h2>

    <form @submit.prevent="submit">
      <div class="form-control" :class="{ invalid: firstName.inValid }">
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          v-model.trim="firstName.value"
          @input="change('firstName')"
        />
      </div>

      <div class="form-control" :class="{ invalid: lastName.inValid }">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          v-model.trim="lastName.value"
          @input="change('lastName')"
        />
      </div>

      <div class="form-control" :class="{ invalid: description.inValid }">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description.value"
          @input="change('description')"
        ></textarea>
      </div>

      <div class="form-control" :class="{ invalid: rate.inValid }">
        <label for="rate">Hourly Rate</label>
        <input
          type="number"
          id="rate"
          v-model.number="rate.value"
          @input="change('rate')"
        />
      </div>

      <div class="form-control" :class="{ invalid: areas.inValid }">
        <h3>Areas of Expertise</h3>
        <div>
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas.value"
            @change="change('areas')"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="backend"
            value="backend"
            v-model="areas.value"
            @change="change('areas')"
          />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="career"
            value="career"
            v-model="areas.value"
            @change="change('areas')"
          />
          <label for="career">Career Advisory</label>
        </div>
      </div>
      <base-button>register</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  emits: ["add-coach"],
  data() {
    return {
      firstName: {
        value: "",
        inValid: false,
      },
      lastName: {
        value: "",
        inValid: false,
      },
      description: {
        value: "",
        inValid: false,
      },
      rate: {
        value: 0,
        inValid: false,
      },
      areas: {
        value: [],
        inValid: false,
      },
    };
  },
  methods: {
    change(key) {
      this[key].inValid = false;
    },
    inValidate() {
      let result = false;
      if (this.firstName.value === "") {
        this.firstName.inValid = true;
        result = true;
      }
      if (this.lastName.value === "") {
        this.lastName.inValid = true;
        result = true;
      }
      if (this.description.value === "") {
        this.description.inValid = true;
        result = true;
      }
      if (this.rate.value < 0) {
        this.rate.inValid = true;
        result = true;
      }
      if (this.areas.value.length === 0) {
        this.areas.inValid = true;
        result = true;
      }
      return result;
    },

    submit() {
      if (this.inValidate()) return;

      const coach = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        areas: this.areas.value,
        description: this.description.value,
        hourlyRate: this.rate.value,
      };

      this.$emit("add-coach", coach);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
