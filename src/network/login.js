import { request } from "./request";

export function logins(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
  });
}
