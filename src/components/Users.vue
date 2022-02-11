<template>
  <div class="container my-5">
    <button @click.prevent="updateUsersApi()" class="btn btn-outline-success">
      Update
    </button>
    <table class="table align-middle" v-if="users && users.length > 0">
      <thead>
        <tr>
          <th id="">Foto</th>
          <th id="">Nombre</th>
          <th id="">Apellido</th>
          <th id="">Correo</th>
          <th id="">{{ countUsers }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td><img v-bind:src="user.avatar" alt="" /></td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Users",
  computed: {
    ...mapState("usersModule", ["users"]),
    ...mapGetters("usersModule", ["countUsers"]),
  },

  mounted() {
    this.getUsersApi();
  },

  methods: {
    //
    ...mapActions("usersModule", ["updateUsersApi", "getUsersApi"]),
  },
};
</script>
