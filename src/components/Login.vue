<template>
  <section class="my-5">
    <h1>Inicio de sesion</h1>
    <form method="post">
      <fieldset class="my4">
        <label for="email" class="form-label">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          v-model="loginUser.email"
        />
      </fieldset>
      <fieldset class="my-4">
        <label for="password" class="form-label">Contrasena</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          v-model="loginUser.password"
        />
      </fieldset>
      <fieldset>
        <input
          type="button"
          value="Ingresar"
          class="btn btn-success px-5"
          @click.prevent="logUser(loginUser)"
        />
      </fieldset>
    </form>
    <div
      v-if="currentUser && currentUser.token"
      class="container py-2 my-4 rounded-3 bg-active"
    >
      <p class="mx-3 mt-2">! Ingreso con exito</p>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LoginForm",
  data: () => {
    return {
      loginUser: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    };
  },
  computed: {
    ...mapState("authModule", ["currentUser"]),
  },
  methods: {
    ...mapActions("authModule", ["logUser"]),
  },
};
</script>

<style></style>
