import axios from "axios";

const axiosFetch = axios.create({
  baseURL: `https://reqres.in/api`,
});

export default axiosFetch;
