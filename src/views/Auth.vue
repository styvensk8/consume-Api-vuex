<template>
  <main class="container">
    <FormAuth></FormAuth>
  </main>
</template>

<script>
import FormAuth from "../components/auth/Form";

export default {
  name: "Register",
  components: {
    FormAuth,
  },
};
</script>
