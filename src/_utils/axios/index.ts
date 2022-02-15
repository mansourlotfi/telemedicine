import axios from "axios";
import { apiConfigs } from "_common/configs/apiConfig";

export const axiosInstance = axios.create({
  baseURL: apiConfigs.baseUrl,
  timeout: apiConfigs.timeout,
  headers: {
    "Content-Type": apiConfigs.contentType,
  },
});

export const setAuthToken = (token?: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export { axiosInstance as axios };
