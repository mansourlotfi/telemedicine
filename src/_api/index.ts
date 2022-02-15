import { axios } from "_utils/axios";
import { routeToService } from "_utils/routeToService";

const SERVICE = {
  GET_USER_PROFILE: (params: any) =>
    routeToService(
      "/API/UserDetail.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),
};
export const getUserProfile = (params: any) =>
  axios.get(SERVICE.GET_USER_PROFILE(params));
