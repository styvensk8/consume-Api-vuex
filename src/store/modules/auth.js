import apiAuth from "../../api/auth";
import Cookies from "js-cookie";

const namespaced = true;

const state = function () {
  return {
    currentUser: {},
  };
};

const actions = {
  registerUser({ commit }, userData) {
    apiAuth.postUsers(userData).then((result) => {
      commit("successUser", result.data);
    });
  },

  logUser({ commit }, user) {
    apiAuth.loginUsers(user).then((result) => {
      console.log(result.data);
      Cookies.set("token", JSON.stringify(result.data), { expires: 0.00001 });
      commit("login", result.data);
    });
  },
};

const mutations = {
  successUser(state, register) {
    console.log(register);
    state.currentUser = register;
  },

  login(state, enter) {
    console.log(enter);
    state.currentUser = enter;
  },
};

export default {
  namespaced,
  state,
  actions,
  mutations,
};
