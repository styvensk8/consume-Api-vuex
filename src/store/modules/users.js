//Usamos los modulos para hacer un acesso al codigo mas ordenado
//Importamos el llamado a la Api
import usersApi from "../../api/users";

//
const namespaced = true;

//
const state = function () {
  return {
    users: [],
  };
};

//
const actions = {
  //
  getUsersApi({ commit }) {
    usersApi.getUsers().then((result) => {
      commit("setUsers", result.data.data);
    });
  },
  //
  updateUsersApi() {
    usersApi
      .updateUser({
        name: "morpheus",
        job: "zion resident",
      })
      .then((result) => {
        console.log(result.data);
      });
  },
};

//
const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

const getters = {
  countUsers(state) {
    return state.users.length;
  },
};

//Esportamos los elementos para poder utilizarlos y hacer llamados en el store
export default {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
