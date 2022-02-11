import { createStore } from "vuex";
import usersModule from "./modules/users";
import authModule from "./modules/auth";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    usersModule,
    authModule,
  },
});
