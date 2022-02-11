//Al usar el llamado de una api siempre utilizamos la libreria de axios
import axios from "axios";

export default {
  //Creamos una funcion donde hacemos el llamado de la api
  getUsers() {
    //Utilizamos el metodo GET
    //Declaramos una variable donde nos retorna el resultado de la llamada de la api
    return axios.get("https://reqres.in/api/users");
  },
  updateUser() {
    return axios.patch("https://reqres.in/api/users/2");
  },
};
