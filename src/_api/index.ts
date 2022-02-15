import { axios } from "_utils/axios";
import { routeToService } from "_utils/routeToService";

const SERVICE = {
  GET_USER_PROFILE: (params: any) =>
    routeToService(
      "/API/UserDetail.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),
  GET_ALL_BLOG_POSTS: () =>
    routeToService("/API/Blog.aspx", process.env.REACT_APP_BASE_URL),
};
export const getUserProfile = (params: any) =>
  axios.get(SERVICE.GET_USER_PROFILE(params));

export const getAllBlogPosts = () => axios.get(SERVICE.GET_ALL_BLOG_POSTS());
