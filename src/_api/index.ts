import { IUserDetailDto } from "_common/models/dtos";
import { axios } from "_utils/axios";
import { routeToService } from "_utils/routeToService";

const SERVICE = {
  GET_USER_PROFILE: (params: IUserDetailDto) =>
    routeToService(
      "/API/UserDetail.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),
  GET_ALL_BLOG_POSTS: () =>
    routeToService("/API/Blog.aspx", process.env.REACT_APP_BASE_URL),

  UPLOAD_FILE: (params: any) =>
    routeToService(
      "/API/UploadCenter.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),
};
export const getUserProfile = (params: IUserDetailDto) =>
  axios.get(SERVICE.GET_USER_PROFILE(params));

export const getAllBlogPosts = () => axios.get(SERVICE.GET_ALL_BLOG_POSTS());

export const uploadFile = (user: IUserDetailDto, fileObject: any) => {
  const formData = new FormData();
  formData.append("file", fileObject);
  return axios.post(SERVICE.UPLOAD_FILE(user), formData);
};
