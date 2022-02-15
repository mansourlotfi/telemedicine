import { axios } from "_utils/axios";
import { routeToService } from "_utils/routeToService";

const SERVICE = {
  GET_ALL_Users: () =>
    routeToService("/User?offset=0&limit=100", process.env.REACT_APP_BASE_URL),
};
export const getAllUsers = () => axios.get(SERVICE.GET_ALL_Users());
