<template>
  <main class="container">
    <LoginForm></LoginForm>
  </main>
</template>

<script>
import LoginForm from "../components/Login.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
