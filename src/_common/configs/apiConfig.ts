interface IApiConfigs {
  baseUrl: string | any;
  timeout: number;
  retryCount: number;
  contentType: string;
}

const apiConfigs: IApiConfigs = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  retryCount: 0,
  contentType: "application/json",
};

export default apiConfigs;
export type { IApiConfigs };
export { apiConfigs };
