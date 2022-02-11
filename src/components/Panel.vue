<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="navbar-item mx-4">
              <router-link to="/" class="nav-link">Usuario</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link to="/auth" class="nav-link">Registrarse</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link to="/login" class="nav-link">Ingresar</router-link>
            </li>
          </ul>
        </div>
        <div v-if="currentUser && currentUser.token">
          <p>Hola {{ currentUser.token }}</p>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Cookies from "js-cookie";

export default {
  name: "Panel",
  mounted() {
    let token = Cookies.get("token");
    console.log(token);
    if (token) {
      this.login(JSON.parse(token));
    }
  },
  computed: {
    ...mapState("authModule", ["currentUser"]),
  },
  methods: {
    ...mapMutations("authModule", ["login"]),
  },
};
</script>
