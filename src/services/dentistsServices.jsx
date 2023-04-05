import axios from "axios";

export const getDentists = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

export const getDentistById = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
