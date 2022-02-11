import axios from "axios";

export default {
  postUsers(userData) {
    return axios.post("https://reqres.in/api/register", userData);
  },

  loginUsers(user) {
    return axios.post("https://reqres.in/api/login", user);
  },
};
