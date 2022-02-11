<template>
  <section class="my-5">
    <h1>Registro</h1>
    <form method="post">
      <fieldset class="my-4">
        <label for="email" class="form-label">Correo</label>
        <input
          type="text"
          name="email"
          id="email"
          class="form-control"
          v-model="newUser.email"
        />
      </fieldset>
      <fieldset class="my-4">
        <label for="password" class="form-label">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control d-inline"
          v-model="newUser.password"
        />
      </fieldset>
      <fieldset class="my-4">
        <input
          type="submit"
          value="Registrar"
          class="btn btn-primary px-5"
          @click.prevent="registerUser(newUser)"
        />
      </fieldset>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormAuth",
  data: () => {
    return {
      newUser: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    };
  },
  methods: {
    ...mapActions("authModule", ["registerUser"]),
  },
};
</script>
