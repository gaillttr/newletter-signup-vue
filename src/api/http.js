import axios from "axios";

const instance = axios.create({
    baseURL: '',
    headers: {
        "":true
    }
  });

export default instance