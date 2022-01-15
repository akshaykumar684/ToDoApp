import axios from "axios";

const axiosFetch = axios.create({
  baseURL: `https://localhost/5000`,
});

export default axiosFetch;
