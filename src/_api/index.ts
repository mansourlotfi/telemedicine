import {
  IUserDetailDto,
  IUserPaymentsDto,
  IPaymentDto,
} from "_common/models/dtos";
import { axios } from "_utils/axios";
import { routeToService } from "_utils/routeToService";

const SERVICE = {
  LOGIN: (params: any) =>
    routeToService(
      "/API/LoginRegister.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  VERIFY: (params: any) =>
    routeToService(
      "/API/VerifySMSCode.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  SEND_FILE: (params: any) =>
    routeToService(
      "/API/SendFile.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  USER_FILE: (params: any) =>
    routeToService(
      "/API/UserFile.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  GET_USER_PROFILE: (params: IUserDetailDto) =>
    routeToService(
      "/API/UserDetail.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  SET_USER_PROFILE: (params: IUserDetailDto) =>
    routeToService(
      "/API/SetProfile.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  GET_USER_PAYMENTS: (params: IUserPaymentsDto) =>
    routeToService(
      "/API/UserPayment.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  CONTACT_US: (params: any) =>
    routeToService(
      "/API/SetContactUs.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  PAYMENTS: (params: IPaymentDto) =>
    routeToService("/API/payment.aspx", process.env.REACT_APP_BASE_URL, params),

  GET_USER_RESERVATION: (params: IUserPaymentsDto) =>
    routeToService(
      "/API/UserReservation.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  SET_RESERVE: (params: IUserDetailDto) =>
    routeToService(
      "/API/SetReservation.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),

  GET_ALL_BLOG_POSTS: () =>
    routeToService("/API/Blog.aspx", process.env.REACT_APP_BASE_URL),

  GET_ALL_Dr_Dates: () =>
    routeToService("/API/DR_Date.aspx", process.env.REACT_APP_BASE_URL),

  GET_Dr_TIMES_BYID: (date_id: number) =>
    routeToService(
      `/API/DR_Time.aspx?date_id=${date_id}`,
      process.env.REACT_APP_BASE_URL
    ),

  GET_BLOG_POST_BYID: (id: any) =>
    routeToService("/API/Blog.aspx", process.env.REACT_APP_BASE_URL, id),

  UPLOAD_FILE: (params: any) =>
    routeToService(
      "/API/UploadCenter.aspx",
      process.env.REACT_APP_BASE_URL,
      params
    ),
};

export const loginOrRegister = (params: any) =>
  axios.get(SERVICE.LOGIN(params));

export const verifyCode = (params: any) => axios.get(SERVICE.VERIFY(params));

export const sendFile = (params: any) => axios.get(SERVICE.SEND_FILE(params));

export const userFile = (params: any) => axios.get(SERVICE.USER_FILE(params));

export const getUserProfile = (params: IUserDetailDto) =>
  axios.get(SERVICE.GET_USER_PROFILE(params));

export const setUserProfile = (params: IUserDetailDto) =>
  axios.get(SERVICE.SET_USER_PROFILE(params));

export const contactUs = (params: any) => axios.get(SERVICE.CONTACT_US(params));

export const getDrDates = () => axios.get(SERVICE.GET_ALL_Dr_Dates());

export const getDrTimesByDate = (id: number) =>
  axios.get(SERVICE.GET_Dr_TIMES_BYID(id));

export const getAllBlogPosts = () => axios.get(SERVICE.GET_ALL_BLOG_POSTS());

export const getBlogPostById = (id: any) =>
  axios.get(SERVICE.GET_BLOG_POST_BYID(id));

export const setReserve = (params: IUserDetailDto) =>
  axios.get(SERVICE.SET_RESERVE(params));

export const uploadFile = (user: IUserDetailDto, fileObject: any) => {
  const formData = new FormData();
  formData.append("file", fileObject);
  return axios.post(SERVICE.UPLOAD_FILE(user), formData);
};

export const getUserPayments = (params: IUserPaymentsDto) =>
  axios.get(SERVICE.GET_USER_PAYMENTS(params));

export const payment = (params: IPaymentDto) =>
  axios.get(SERVICE.PAYMENTS(params));

export const getUserReservation = (params: IUserPaymentsDto) =>
  axios.get(SERVICE.GET_USER_RESERVATION(params));
