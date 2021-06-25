import { request } from "./request";

// 手机登录
export function logins(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
  });
}
// 获取账号信息
export function getAccount() {
  return request({
    url: "/user/account",
  });
}
// 获取用户等级
export function getUsresLevel() {
  return request({
    url: "/user/level",
  });
}
// 退出登录
export function exit() {
  return request({
    url: "/logout",
  });
}
// 获取用户歌单
export function getUserPlayList(uid) {
  return request({
    url: "/user/playlist",
    params: {
      uid,
    },
  });
}
