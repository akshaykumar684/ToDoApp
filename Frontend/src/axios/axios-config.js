import axios from "axios";

const axiosFetch = axios.create({
  baseURL: `http://localhost:51177/api`,
});

export default axiosFetch;
