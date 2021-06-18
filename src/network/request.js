// 引入axios
import axios from "axios";

export function request(config) {
  const instance = axios.create({
    // 网易云后台服务器地址
    baseURL: "http://localhost:3000/",
    // 请求延时
    timeout: 10000,
    // 允许跨域
    withCredentials: true,
  });
  // 请求拦截
  instance.interceptors.request.use(
    (config) => {
      if (config.meth === "post" && !(config.data instanceof FormData)) {
        config.headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
        config.data = qs.stringify(config.data, {
          arrayFormat: "repeat",
        });
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // 响应拦截
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance(config);
}
